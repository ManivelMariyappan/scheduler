import { Component } from '@angular/core';
import { appointments} from '../service/kendo_service';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-kendo-scheduler',
  templateUrl: './kendo-scheduler.component.html',
  styleUrls: ['./kendo-scheduler.component.scss']
})
export class KendoSchedulerComponent {
  public events: SchedulerEvent[] = appointments;
  IsScheduleExpanded = false;
  

  public group: any = {
    resources: ["Chair"],
    orientation: "horizontal",
  };

  public resources: any[] = [
    {
      name: "Chair",
      data: [
        { text: "chair 1", value: 1, color: "#10dc40" },
        { text: "chair 2", value: 2, color: "#2a0f3f" },
        { text: "chair 3", value: 3, color: "#f70084" },
        { text: "chair 4", value: 4, color: "#ff8000" },
        { text: "chair 5", value: 5, color: "#e46bf4" },
        { text: "chair 6", value: 6, color: "#6600ff" },
        { text: "chair 7", value: 7, color: "#ff0099" },
        { text: "chair 8", value: 8, color: "#a0db8e" },
        { text: "chair 9", value: 9, color: "#ff7373" },
        { text: "chair 10", value: 10, color: "#13017c" },
        { text: "chair 11", value: 11, color: "#6666ff" },
        { text: "chair 12", value: 12, color: "#ff9900" },
        { text: "chair 13", value: 13, color: "#a0db8e" },
        { text: "chair 14", value: 14, color: "#c6e2ff" },
        { text: "chair 15", value: 15, color: "#ff7373" },

      ],
      field: "chairId",
      valueField: "value",
      textField: "text",
      colorField: "color",
    },
  ];

  constructor() {
  }
  closeSideBar() {
    this.IsScheduleExpanded = !this.IsScheduleExpanded;
  }
}
