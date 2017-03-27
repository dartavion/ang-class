import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard";
import { PassengerCountComponent } from "./components/pasenger-detail/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-count/passenger-detail.component";

@NgModule({
  declarations: [
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }