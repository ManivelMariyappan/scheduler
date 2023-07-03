import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoSchedulerComponent } from './kendo-scheduler/kendo-scheduler.component';
import { DevexpressSchedulerComponent } from './devexpress-scheduler/devexpress-scheduler.component';
import { ScheduleTemplateComponent } from './schedule-template/schedule-template.component';

const routes: Routes = [
  {
    path: 'kendo',
    component: KendoSchedulerComponent
  },
  {
    path: 'devexpress',
    component: DevexpressSchedulerComponent
  },
  {
    path: 'devexpressTemplate',
    component: ScheduleTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
