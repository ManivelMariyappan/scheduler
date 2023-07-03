import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTemplateComponent } from './schedule-template.component';

describe('ScheduleTemplateComponent', () => {
  let component: ScheduleTemplateComponent;
  let fixture: ComponentFixture<ScheduleTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleTemplateComponent]
    });
    fixture = TestBed.createComponent(ScheduleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
