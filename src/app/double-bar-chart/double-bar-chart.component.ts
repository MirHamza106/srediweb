import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-double-bar-chart',
  standalone: true,
  imports: [AgCharts],
  template: `<ag-charts
    [options]="options"
    style="width: 100%; height: 400px; display: block; border-radius: 10px; background-color: #FBFBFB"
  ></ag-charts> `,
})
export class DoubleBarChartComponent {
  public options: AgChartOptions;

  doubleBarChartData = [
    {
      quarter: "Q1'18",
      iphone: 140,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      services: 36,
    },
  ];

  constructor() {
    this.options = {
      data: this.doubleBarChartData,

      series: [
        {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'iphone',
          yName: 'iPhone',
          showInLegend: true,
        },
        {
          type: 'bar',
          xKey: 'quarter',
          yKey: 'services',
          yName: 'Services',
          showInLegend: true,
        },
      ],
    };
  }
}
