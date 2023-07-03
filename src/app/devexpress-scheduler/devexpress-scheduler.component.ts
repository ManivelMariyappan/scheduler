import { Component } from '@angular/core';
import { AppointmentInterface, appointments, chairDataInterface, chairData, AppColors, appColors } from '../service/devexpress_service';

@Component({
  selector: 'app-devexpress-scheduler',
  templateUrl: './devexpress-scheduler.component.html',
  styleUrls: ['./devexpress-scheduler.component.scss']
})
export class DevexpressSchedulerComponent {

  appointmentsData: AppointmentInterface[];

  chairData: chairDataInterface[];
  appColor:AppColors[];
  currentDate: Date = new Date();



  constructor() {
    this.appointmentsData = appointments;
    this.chairData = chairData;
    this.appColor = appColors
  }
}
