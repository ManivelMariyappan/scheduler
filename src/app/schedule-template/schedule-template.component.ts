import { Component, ViewChild } from '@angular/core';
import {
  AppointmentInterface, appointments,
  chairDataInterface, chairData, AppColors,
  appColors, scheduleTemplateList
} from '../service/devexpress_service';
import { DxSchedulerComponent } from 'devextreme-angular';

@Component({
  selector: 'app-schedule-template',
  templateUrl: './schedule-template.component.html',
  styleUrls: ['./schedule-template.component.scss']
})
export class ScheduleTemplateComponent {

  @ViewChild(DxSchedulerComponent, { static: false })
  scheduler!: DxSchedulerComponent;

  appointmentsData: AppointmentInterface[];

  chairData: chairDataInterface[];
  appColor: AppColors[];
  currentDate: Date = new Date();
  IsScheduleExpanded = false;



  constructor() {
    this.appointmentsData = appointments;
    this.chairData = chairData;
    this.appColor = appColors
  }

  templateIdColors = {};

  getColorForDataCell(cellData: any) {
    const { groups, startDate, endDate } = cellData;
    const { chairId } = groups;
    const startTime = new Date(startDate);
    const endTime = new Date(endDate);
    const matchingColor = scheduleTemplateList.find(color => {
      const { chairId: colorChairId, ChairStartTimeHour, ChairStartTimeMinute, ChairEndTimeHour, ChairEndTimeMinute } = color;
      const colorStartTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), ChairStartTimeHour, ChairStartTimeMinute);
      const colorEndTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), ChairEndTimeHour, ChairEndTimeMinute);
      return chairId === colorChairId && startTime >= colorStartTime && endTime <= colorEndTime;
    });

    if (matchingColor && startTime.getDate() === new Date().getDate()) {
      cellData.SelectedType = matchingColor.SelectedType;
      return {
        color: matchingColor.Color,
        SelectedType: matchingColor.SelectedType
      };
    }

    return null;
  }

  closeSideBar() {
    this.IsScheduleExpanded = !this.IsScheduleExpanded;
    this.triggerRepaint();

  }

  triggerRepaint() {
    if (this.scheduler) {
      setTimeout( () => {
        this.scheduler.instance.repaint();
      },100)

    }
  }

}