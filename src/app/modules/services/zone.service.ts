import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Zone, ZoneGQL, ZonesGQL} from "../../core/graphql/generated/graphql";

@Injectable({providedIn: 'root'})
export class ZoneService {
    private _savedZoneKey = 'selectedZone';
    private _zone: BehaviorSubject<Zone | null> = new BehaviorSubject<Zone | null>(null);
    private _zones: BehaviorSubject<Zone[] | null> = new BehaviorSubject<Zone[] | null>(null);
    private _selectedZone: BehaviorSubject<Zone | null> = new BehaviorSubject<Zone | null>(null);

    constructor(
        private zonesGql: ZonesGQL,
        private zoneGql: ZoneGQL,
    ) {
    }

    get zone$(): Observable<Zone> {
        return this._zone.asObservable();
    }

    get zones$(): Observable<Zone[]> {
        return this._zones.asObservable();
    }

    get selectedZone$(): Observable<Zone> {
        if (!this._selectedZone.getValue()) {
            this.selectedZone$ = this.savedZone;
        }

        return this._selectedZone.asObservable();
    }

    set zone$(zone: Zone) {
        this._zone.next(zone);
    }

    set selectedZone$(zone: Zone) {
        this.savedZone = zone;
        this._selectedZone.next(zone);
    }

    /* Local Storage */

    set savedZone(zone: Zone) {
        localStorage.setItem(this._savedZoneKey, JSON.stringify(zone));
    }

    get savedZone(): Zone {
        return JSON.parse(localStorage.getItem(this._savedZoneKey)) as Zone;
    }

    /*
    * QUERIES
    * */

    getZones(): Observable<{ readonly data?: { zones: Zone[] } }> {
        return this.zonesGql.watch().valueChanges.pipe(
            tap(({data: {zones}}) => {
                return this._zones.next(zones);
            }),
        );
    }

    getZone(slug: string): Observable<{ readonly data?: { zone: Zone } }> {
        return this.zoneGql.watch({slug}).valueChanges.pipe(
            tap(({data: {zone}}) => {
                return this._zone.next(zone);
            })
        )
    }
}
