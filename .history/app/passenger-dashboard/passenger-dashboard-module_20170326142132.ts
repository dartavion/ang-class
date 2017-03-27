import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard";
import { PassengerDetailComponent } from "./components/pasenger-detail/passenger-detail.component";
import { PassengerDetailComponent } from "./components/passenger-count/passenger-count.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }