import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCalendarSassComponent } from './month-calendar-sass.component';

describe('MonthCalendarSassComponent', () => {
  let component: MonthCalendarSassComponent;
  let fixture: ComponentFixture<MonthCalendarSassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthCalendarSassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthCalendarSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
