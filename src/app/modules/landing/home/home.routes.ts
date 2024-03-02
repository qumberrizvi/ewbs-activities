import {Routes} from '@angular/router';
import {LandingHomeComponent} from 'app/modules/landing/home/home.component';
import {inject} from "@angular/core";
import {ZoneService} from "../../../services/zone.service";

export default [
    {
        path: '',
        component: LandingHomeComponent,
        resolve: {
            zones: () => inject(ZoneService).getZones(),
        }
    },
] as Routes;
