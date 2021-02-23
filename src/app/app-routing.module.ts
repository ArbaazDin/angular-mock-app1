import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarManagerComponent } from './calendars/calendar-manager/calendar-manager.component';
import { ClockManagerComponent } from './clocks/clock-manager/clock-manager.component';
import { MonthCalendarSassManagerComponent } from './month-cal-sass/month-calendar-sass-manager/month-calendar-sass-manager.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "monthcalendar"
  },
  {
    path: "calendar",
    component: CalendarManagerComponent
  },
  {
    path: "clock",
    component: ClockManagerComponent
  },
  {
    path:"monthcalendar",
    component:MonthCalendarSassManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
