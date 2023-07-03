import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevexpressSchedulerComponent } from './devexpress-scheduler/devexpress-scheduler.component';
import { KendoSchedulerComponent } from './kendo-scheduler/kendo-scheduler.component';

import { DxSchedulerModule } from 'devextreme-angular';
import { SchedulerModule,PDFModule  } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleTemplateComponent } from './schedule-template/schedule-template.component';



@NgModule({
  declarations: [
    AppComponent,
    DevexpressSchedulerComponent,
    KendoSchedulerComponent,
    ScheduleTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSchedulerModule,
    SchedulerModule,
    BrowserAnimationsModule,
    PDFModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
