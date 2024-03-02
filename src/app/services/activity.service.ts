import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Activity, SearchActivitiesGQL,} from "../core/graphql/generated/graphql";

@Injectable({providedIn: 'root'})
export class ActivityService {
    private _searchedActivities: BehaviorSubject<Activity[] | null> = new BehaviorSubject<Activity[] | null>(null);

    constructor(
        private searchActivitiesGql: SearchActivitiesGQL,
    ) {
    }

    /*
    * QUERIES
    * */

    searchActivities(keyword: string, zoneId?: string): Observable<{ readonly data?: { searchActivities: any } }> {
        return this.searchActivitiesGql.watch({keyword, zoneId}).valueChanges.pipe(
            tap(({data: {searchActivities}}) => {
                return this._searchedActivities.next(searchActivities);
            }),
        );
    }
}
