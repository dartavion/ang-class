import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard";
import { PassengerDetailComponent } from "./components/pasenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";

import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }