import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard";

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
    PassengerCountComponent
  ]
})
export class PassengerDashboardModule { }