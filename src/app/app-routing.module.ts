import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarManagerComponent } from './calendars/calendar-manager/calendar-manager.component';
import { ClockManagerComponent } from './clocks/clock-manager/clock-manager.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "calendar"
  },
  {
    path: "calendar",
    component: CalendarManagerComponent
  },
  {
    path: "clock",
    component: ClockManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
