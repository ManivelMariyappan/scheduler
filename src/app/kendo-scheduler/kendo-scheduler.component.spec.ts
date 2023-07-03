import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSchedulerComponent } from './kendo-scheduler.component';

describe('KendoSchedulerComponent', () => {
  let component: KendoSchedulerComponent;
  let fixture: ComponentFixture<KendoSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KendoSchedulerComponent]
    });
    fixture = TestBed.createComponent(KendoSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
