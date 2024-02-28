import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {ActivitiesByZoneGQL, Activity, SearchActivitiesGQL,} from "../../core/graphql/generated/graphql";

@Injectable({providedIn: 'root'})
export class ActivityService {
    private _activitiesByZone: BehaviorSubject<Activity[] | null> = new BehaviorSubject<Activity[] | null>(null);
    private _searchedActivities: BehaviorSubject<Activity[] | null> = new BehaviorSubject<Activity[] | null>(null);

    constructor(
        private activitiesByZoneGql: ActivitiesByZoneGQL,
        private searchActivitiesGql: SearchActivitiesGQL,
    ) {
    }

    get activitiesByZone$(): Observable<Activity[]> {
        return this._activitiesByZone.asObservable();
    }

    /*
    * QUERIES
    * */

    getActivitiesByZone(zone: string): Observable<{ readonly data?: { activitiesByZone: any } }> {
        return this.activitiesByZoneGql.watch({zone}).valueChanges.pipe(
            tap(({data: {activitiesByZone}}) => {
                return this._activitiesByZone.next(activitiesByZone);
            }),
        );
    }

    searchActivities(keyword: string, zoneId?: string): Observable<{ readonly data?: { searchActivities: any } }> {
        return this.searchActivitiesGql.watch({keyword, zoneId}).valueChanges.pipe(
            tap(({data: {searchActivities}}) => {
                return this._searchedActivities.next(searchActivities);
            }),
        );
    }
}
