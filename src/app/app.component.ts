import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GoogleAnalyticsService} from "./services/google-analytics.service";
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(
        private readonly googleAnalyticsService: GoogleAnalyticsService,
    ) {
    }

    ngOnInit(): void {
        if (environment.production) {
            this.googleAnalyticsService.initialize();
        }
    }
}
