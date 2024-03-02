import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Activity, Zone} from "../../core/graphql/generated/graphql";
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ZoneService} from "../../services/zone.service";
import {ActivityService} from "../../services/activity.service";
import {FuseConfirmationService} from "../../../@fuse/services/confirmation";

@Component({
    selector: 'activities-table',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule, MatButtonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './activities-table.component.html',
})
export class ActivitiesTableComponent implements OnInit, OnDestroy {
    private _searchKeyword: Subject<string | null> = new Subject<string | null>();
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    dataSource: Activity[] = [];
    zone: Zone;
    keywordModel: string;

    activitiesColumns = ['code', 'name', 'actions'];

    constructor(
        private _zonesService: ZoneService,
        private _activityService: ActivityService,
        private _fuseConfirmationDialogService: FuseConfirmationService,
    ) {
    }

    ngOnInit(): void {
        this.setupZone();
        this.setupSearch();
    }

    private setupZone() {
        this._zonesService.selectedZone$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((zone) => {
                this.zone = zone;
                this.search();
            });
    }

    private setupSearch() {
        this.search();
        this._searchKeyword.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe((keyword) => {
            this.search(keyword);
        });
    }

    openInformationDialog(activity: Activity) {
        this._fuseConfirmationDialogService.open({
            title: `${activity.code} - ${activity.name}`,
            message: activity.description || 'No description available!',
            icon: {
                show: true,
                name: 'heroicons_outline:information-circle',
                color: 'accent'
            },
            actions: {
                confirm: {
                    show: false,
                },
                cancel: {
                    show: false,
                }
            },
            dismissible: true,
        })
    }


    search(keyword: string = '') {
        this._activityService.searchActivities(keyword, this.zone.id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({data: {searchActivities}}) => {
                this.dataSource = searchActivities;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    handleSearchUpdate(keyword: string) {
        this._searchKeyword.next(keyword);
    }
}
