import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarManagerComponent } from './calendars/calendar-manager/calendar-manager.component';
import { CalendarComponent } from './calendars/calendar/calendar.component';
import { ClockManagerComponent } from './clocks/clock-manager/clock-manager.component';
import { ClockComponent } from './clocks/clock/clock.component';
import { MonthCalendarSassComponent } from './month-cal-sass/month-calendar-sass/month-calendar-sass.component';
import { MonthCalendarSassManagerComponent } from './month-cal-sass/month-calendar-sass-manager/month-calendar-sass-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarManagerComponent,
    CalendarComponent,
    ClockManagerComponent,
    ClockComponent,
    MonthCalendarSassComponent,
    MonthCalendarSassManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
