import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard";
import { PassengerCountComponent } from "./components/pasenger-detail/passenger-count.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    Passenger
  ]
})
export class PassengerDashboardModule { }