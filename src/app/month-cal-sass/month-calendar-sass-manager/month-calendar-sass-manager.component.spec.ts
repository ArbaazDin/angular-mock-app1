import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCalendarSassManagerComponent } from './month-calendar-sass-manager.component';

describe('MonthCalendarSassManagerComponent', () => {
  let component: MonthCalendarSassManagerComponent;
  let fixture: ComponentFixture<MonthCalendarSassManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthCalendarSassManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthCalendarSassManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
