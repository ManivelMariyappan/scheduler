import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressSchedulerComponent } from './devexpress-scheduler.component';

describe('DevexpressSchedulerComponent', () => {
  let component: DevexpressSchedulerComponent;
  let fixture: ComponentFixture<DevexpressSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevexpressSchedulerComponent]
    });
    fixture = TestBed.createComponent(DevexpressSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
