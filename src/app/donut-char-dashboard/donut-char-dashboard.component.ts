import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-donut-char-dashboard',
  standalone: true,
  imports: [AgCharts],
  template: `
  <div style="border-radius: 10px; overflow: hidden;">
    <ag-charts
      [options]="options"
      style="width: 100%; height: 350px; display: block;"
    ></ag-charts>
  </div>
`,
})
export class DonutCharDashboardComponent {
  public options: AgChartOptions;

  donutChartData = [
    { Hours: 'Total Worked Hours', Tracked: 600, percentage: '60%' },
    { Hours: 'Total Tracked Hours', Tracked: 400, percentage: '40%' },
  ];

  constructor() {
    this.options = {
      data: this.donutChartData,
      background: {
        fill: '#FBFBFB'
      },
   
      series: [
        {
          type: 'donut',
          angleKey: 'Tracked',
          calloutLabelKey: 'Hours',
          sectorLabelKey: 'percentage',
          innerRadiusRatio: 0.6,
          sectorLabel: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14
          },
          fills: ['#03BCF3', '#001524'],
          strokeWidth: 0,
          innerLabels: [
            {
              text: 'Total Hours',
              fontWeight: 'bold',
              color: '#333333',
              fontSize: 16,
            },
            {
              text: '1,000',
              fontSize: 24,
              fontWeight: 'bold',
              color: '#000000',
            },
          ],
          calloutLine: {
            colors: ['#767676', '#767676'],
            strokeWidth: 1,
          },
          calloutLabel: {
            offset: 5,
            color: '#333333'
          },
          tooltip: {
            renderer: ({ datum }) => ({
              content: `${datum.Hours}: ${datum.Tracked} hrs`,
              color: '#333333'
            }),
          },
        },
      ],
    };
  }
}