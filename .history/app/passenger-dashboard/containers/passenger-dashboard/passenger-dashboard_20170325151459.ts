@import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['./passenger-dashboard.component.css'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul></ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}