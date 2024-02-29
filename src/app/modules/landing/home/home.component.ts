import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Observable, Subject, takeUntil} from "rxjs";
import {Zone} from 'app/core/graphql/generated/graphql';
import {ZoneService} from "../../services/zone.service";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ArrowComponent} from "../../../shared/arrow/arrow.component";
import {ActivitiesTableComponent} from "../../../shared/activities-table/activities-table.component";

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, RouterLink, MatIconModule, NgOptimizedImage, CommonModule, MatTooltipModule, ArrowComponent, ActivitiesTableComponent],
})
export class LandingHomeComponent implements OnInit, OnDestroy {
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selectedZone: Zone;
    zones$: Observable<Zone[]>

    /**
     * Constructor
     */
    constructor(private _zonesService: ZoneService) {
    }

    /**
     * On init
     */

    ngOnInit(): void {
        this.zones$ = this._zonesService.zones$;
        this._zonesService.selectedZone$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((zone) => {
                this.selectedZone = zone;
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

    /**
     * Selects a zone as active
     */
    selectZone(zone: Zone) {
        this._zonesService.selectedZone$ = zone;
    }

    /**
     * Checks if the given zone is active
     * @param zone
     * @returns boolean
     */
    isSelectedZone(zone: Zone): boolean {
        return this.selectedZone && this.selectedZone.id === zone.id;
    }

    getComputedDarkerColor(zone: Zone) {
        return this.adjustLuminanceOfColor(zone.color, -50);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }


    parseColor(color: string) {
        const m = color.match(/^#([0-9a-f]{6})([0-9a-f]{2}){0,1}$/i);
        if (!m || m.length === 0) {
            console.error(`parseColor: could not parse ${color}`);
            return [];
        }
        const [, colorPart, alphaPart] = m;
        const arr = [
            parseInt(colorPart.substring(0, 2), 16),
            parseInt(colorPart.substring(2, 4), 16),
            parseInt(colorPart.substring(4, 6), 16),
        ];
        if (alphaPart) {
            arr.push(parseInt(alphaPart, 16));
        } else {
            arr.push(255);
        }
        return arr;
    }

    componentToHex(c: number) {
        const hex = c.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    /**
     * INPUT: 3 or 4 values between 0-255
     * OUTPUT:
     * h = 0-255
     * s = 0-1
     * l = 0-1
     */
    rgbToHsl(rIn: number, gIn: number, bIn: number, a = 1) {
        const r = rIn / 255;
        const g = gIn / 255;
        const b = bIn / 255;

        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);

        const l = (max + min) / 2;
        let s;
        let h;

        if (max === min) {
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r === max) h = (g - b) / (max - min);
        else if (g === max) h = 2 + (b - r) / (max - min);
        else if (b === max) h = 4 + (r - g) / (max - min);

        h *= 60;
        if (h < 0) h += 360;
        return [h, s, l, a];
    }

    /**
     * INPUT:
     * h = 0-255
     * s = 0-1
     * l = 0-1
     * a = optional
     * OUTPUT: 3 or 4 values between 0-255, alpha omitted if not given
     */
    hslToRgb(h: number, s: number, l: number, a = 1) {
        let r: number;
        let g: number;
        let b: number;
        if (s === 0) {
            r = g = b = l * 255;
        } else {
            const t3 = [0, 0, 0];
            const c = [0, 0, 0];
            const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const t1 = 2 * l - t2;
            const h_ = h / 360;
            t3[0] = h_ + 1 / 3;
            t3[1] = h_;
            t3[2] = h_ - 1 / 3;
            for (let i = 0; i < 3; i += 1) {
                if (t3[i] < 0) t3[i] += 1;
                if (t3[i] > 1) t3[i] -= 1;
                if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
                else if (2 * t3[i] < 1) c[i] = t2;
                else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
                else c[i] = t1;
            }
            [r, g, b] = [Math.round(c[0] * 255), Math.round(c[1] * 255), Math.round(c[2] * 255)];
        }
        return [r, g, b, a];
    }

    /**
     * INPUT: a color in hex RGB form like #EB64A1, and a luminanceShift in decimal form, per Sketch HSL format.
     * a luminanceShift of -4 is noticeably darker
     */
    adjustLuminanceOfColor(color: string, luminanceShift: number) {
        const components = this.parseColor(color);
        if (!components || components.length === 0) {
            return color;
        }
        const hsl = this.rgbToHsl(components[0], components[1], components[2]);
        hsl[2] += luminanceShift / 100;
        const rgb = this.hslToRgb(hsl[0], hsl[1], hsl[2]);
        return `#${this.componentToHex(rgb[0])}${this.componentToHex(rgb[1])}${this.componentToHex(rgb[2])}`;
    };

}
