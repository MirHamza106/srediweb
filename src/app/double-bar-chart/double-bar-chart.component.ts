import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-double-bar-chart',
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
export class DoubleBarChartComponent {
  public options: AgChartOptions;

  doubleBarChartData = [
    { month: 'Jan', cumulativeHours: 200, totalHours: 50 },
    { month: 'Feb', cumulativeHours: 400, totalHours: 100 },
    { month: 'Mar', cumulativeHours: 990, totalHours: 80 },
    { month: 'Apr', cumulativeHours: 700, totalHours: 150 },
    { month: 'May', cumulativeHours: 820, totalHours: 120 },
    { month: 'Jun', cumulativeHours: 750, totalHours: 140 },
    { month: 'Jul', cumulativeHours: 900, totalHours: 110 },
    { month: 'Aug', cumulativeHours: 980, totalHours: 130 },
    { month: 'Sep', cumulativeHours: 850, totalHours: 100 },
  ];

  constructor() {
    this.options = {
      data: this.doubleBarChartData,
      background: {
        fill: '#FBFBFB'
      },
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'cumulativeHours',
          yName: 'Cumulative Hours',
          fill: '#03BCF3',
          tooltip: {
            renderer: ({ datum }) => ({
              content: `Cumulative Hours: ${datum.cumulativeHours} hrs`
            }),
          },
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'totalHours',
          yName: 'Total Hours',
          fill: '#001524',
          tooltip: {
            renderer: ({ datum }) => ({
              content: `Total Hours: ${datum.totalHours} hrs`
            }),
          },
        },
      ],
      legend: {
        position: 'bottom',
      },
    };
  }
}
