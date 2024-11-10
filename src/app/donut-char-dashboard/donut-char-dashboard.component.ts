import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-donut-char-dashboard',
  standalone: true,
  imports: [AgCharts],
  template: `<ag-charts
    [options]="options"
    style="width: 100%; height: 400px; display: block; border-radius: 10px; background-color: #FBFBFB"
  ></ag-charts> `,
})
export class DonutCharDashboardComponent {
  public options: AgChartOptions;

  donutChartData = [
    { Hours: 'Total Worked Hours', Tracked: 600 },
    { Hours: 'Total Tracked Hours', Tracked: 400 },
  ];

  constructor() {
    this.options = {
      data: this.donutChartData,
      series: [
        {
          type: 'donut',
          calloutLabelKey: 'Hours',
          angleKey: 'Tracked',
          innerRadiusRatio: 0.6,
          fills: ['#03BCF3', '#000'],
          innerLabels: [
            {
              text: 'Total Hours',
              fontWeight: 'bold',
              color: '#767676',
              fontSize: 12,
            },
            {
              text: `${
                Number(this.donutChartData[0].Tracked) +
                Number(this.donutChartData[1].Tracked)
              }`,
              spacing: 4,
              fontSize: 14,
              color: 'black',
            },
          ],
          innerCircle: {
            fill: '#fff',
          },
        },
      ],
    };
  }
}
