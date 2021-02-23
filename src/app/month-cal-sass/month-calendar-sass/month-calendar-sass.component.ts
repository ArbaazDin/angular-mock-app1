import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'month-calendar-sass',
  templateUrl: './month-calendar-sass.component.html',
  styleUrls: ['./month-calendar-sass.component.scss']
})
export class MonthCalendarSassComponent implements OnInit {

  public dates = [];

  public days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  public monthToDisplay: Date = new Date();
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth() + 1;
  public monthCounter: number = 0;
  public selectedDate = {};

  constructor() { }

  ngOnInit(): void {

    // Sunday = 0, Monday = 1 and so on.'
    let totalDaysInMonth: number = new Date(this.year, this.month, 0).getDate();
    let firstDayOfCurrentMonth: number = new Date(this.year, this.month - 1, 1).getDay();
    let lastDayOfCurrentMonth: number = new Date(this.year, this.month, 0).getDay();
    let lastDayOfPreviousMonth: number = new Date(this.year, (this.month + this.monthCounter) - 1, 0).getDate();

    // Initial fill 
    if (firstDayOfCurrentMonth > 1) {
      // Calculate the from which date the array should be filled with the previous month dates
      // lastDayOfPreviousMonth holds the total number of days in the previous month
      // firstDayOfCurrentMonth holds the day at which the current month begins i.e. Mon, Tue, ...
      let lastMonthDateToStartFill = (lastDayOfPreviousMonth + 2) - firstDayOfCurrentMonth;
      for (let index = 1; index < firstDayOfCurrentMonth; index++) {
        this.dates.push({
          isSelected: false,
          value: lastMonthDateToStartFill,
          monthType: "previous"
        });
        lastMonthDateToStartFill++;
      }
    }
    // Actual Month Dates Fill
    for (let index = 1; index <= totalDaysInMonth; index++) {
      this.dates.push({
        isSelected: false,
        value: index,
        monthType: "current"
      });
    }

    // Last Fill
    let i = 1;
    for (let index = this.dates.length; index < 42; index++) {
      this.dates.push({
        isSelected: false,
        value: i,
        monthType: "next"
      });
      i++;
    }

  }

  selectDay(date): void {
    if (date.monthType === "previous") {
      this.selectedDate = {
        isSelected: false,
        value: date.value,
        monthType: "current"
      };
      this.previousMonth();
    } else if (date.monthType === "next") {
      this.selectedDate = {
        isSelected: false,
        value: date.value,
        monthType: "current"
      };
      this.nextMonth();
    } else {
      this.dates.forEach(day => {
        if (day.value === date.value && day.monthType === "current") {
          day.isSelected = true;
        } else {
          day.isSelected = false;
        }
      });
    }
  }

  nextMonth(): void {

    ++this.monthCounter;
    this.dates = [];

    // Sunday = 0, Monday = 1 and so on.
    this.monthToDisplay = new Date(this.year, (this.month + this.monthCounter), 0);
    let totalDaysInMonth: number = new Date(this.year, (this.month + this.monthCounter), 0).getDate();
    let firstDayOfCurrentMonth: number = new Date(this.year, (this.month + this.monthCounter) - 1, 1).getDay();
    let lastDayOfCurrentMonth: number = new Date(this.year, (this.month + this.monthCounter), 0).getDay();
    let lastDayOfPreviousMonth: number = new Date(this.year, (this.month + this.monthCounter) - 1, 0).getDate();

    // Initial fill 
    if (firstDayOfCurrentMonth > 1) {
      // Calculate the from which date the array should be filled with the previous month dates
      // lastDayOfPreviousMonth holds the total number of days in the previous month
      // firstDayOfCurrentMonth holds the day at which the current month begins i.e. Mon, Tue, ...
      let lastMonthDateToStartFill = (lastDayOfPreviousMonth + 2) - firstDayOfCurrentMonth;
      for (let index = 1; index < firstDayOfCurrentMonth; index++) {
        this.dates.push({
          isSelected: false,
          value: lastMonthDateToStartFill,
          monthType: "previous"
        });
        lastMonthDateToStartFill++;
      }
    }

    // Actual Month Dates Fill
    for (let index = 1; index <= totalDaysInMonth; index++) {
      this.dates.push({
        isSelected: false,
        value: index,
        monthType: "current"
      });
    }

    // Last Fill
    let i = 1;
    for (let index = this.dates.length; index < 42; index++) {
      this.dates.push({
        isSelected: false,
        value: i,
        monthType: "next"
      });
      i++;
    }

    // assign the selected day 
    this.selectDay(this.selectedDate);

  }


  previousMonth(): void {

    --this.monthCounter;
    this.dates = [];

    // Sunday = 0, Monday = 1 and so on.
    this.monthToDisplay = new Date(this.year, (this.month + this.monthCounter), 0);
    let totalDaysInMonth: number = new Date(this.year, (this.month + this.monthCounter), 0).getDate();
    let firstDayOfCurrentMonth: number = new Date(this.year, (this.month + this.monthCounter) - 1, 1).getDay();
    let lastDayOfCurrentMonth: number = new Date(this.year, (this.month + this.monthCounter), 0).getDay();
    let lastDayOfPreviousMonth: number = new Date(this.year, (this.month + this.monthCounter) - 1, 0).getDate();

    // Initial fill 
    if (firstDayOfCurrentMonth > 1) {
      // Calculate the from which date the array should be filled with the previous month dates
      // lastDayOfPreviousMonth holds the total number of days in the previous month
      // firstDayOfCurrentMonth holds the day at which the current month begins i.e. Mon, Tue, ...
      let lastMonthDateToStartFill = (lastDayOfPreviousMonth + 2) - firstDayOfCurrentMonth;
      for (let index = 1; index < firstDayOfCurrentMonth; index++) {
        this.dates.push({
          isSelected: false,
          value: lastMonthDateToStartFill,
          monthType: "previous"
        });
        lastMonthDateToStartFill++;
      }
    }

    // Actual Month Dates Fill
    for (let index = 1; index <= totalDaysInMonth; index++) {
      this.dates.push({
        isSelected: false,
        value: index,
        monthType: "current"
      });
    }

    // Last Fill
    let i = 1;
    for (let index = this.dates.length; index < 42; index++) {
      this.dates.push({
        isSelected: false,
        value: i,
        monthType: "next"
      });
      i++;
    }

    // assign the selected day 
    this.selectDay(this.selectedDate);

  }
}
