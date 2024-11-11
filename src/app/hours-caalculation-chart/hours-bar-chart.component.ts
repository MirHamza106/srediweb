import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

interface ProjectData {
  project: string;
  hours: number;
  fill?: string;
}

@Component({
  selector: 'app-hours-bar-chart',
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
export class HoursBarChartComponent {
  public options: AgChartOptions;

  projectData: ProjectData[] = [
    { project: 'Apple', hours: 250, fill: '#4B9EF9' }, // blue
    { project: 'Walmart', hours: 500, fill: '#FF6B2C' }, // orange
    { project: 'Microsoft', hours: 50, fill: '#8B4513' }, // brown
    { project: 'Project 01', hours: 150, fill: '#2A1E5C' }, // dark purple
    { project: 'Project 02', hours: 350, fill: '#7B68EE' }, // medium purple
    { project: 'Project 03', hours: 500, fill: '#9370DB' }, // light purple
    { project: 'Project 04', hours: 150, fill: '#66CDAA' }, // mint green
    { project: 'Project 05', hours: 450, fill: '#C71585' }, // dark pink
    { project: 'Project 06', hours: 150, fill: '#363636' }, // dark gray
    { project: 'Project 07', hours: 50, fill: '#90EE90' }, // light green
  ];

  constructor() {
    this.options = {
      data: this.projectData,
      background: {
        fill: '#FBFBFB',
      },
      series: [
        {
          type: 'bar',
          xKey: 'project',
          yKey: 'hours',
          yName: 'Hours',
          itemStyler: (data: any) => {
            const color = data.datum.fill;
            return { fill: color };
          },
          cornerRadius: 4,
          fillOpacity: 1,
          tooltip: {
            renderer: (params: any) => {
              return {
                title: params.datum.project,
                content: `${params.datum.hours} hrs`,
              };
            },
          },
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          paddingInner: 0.7,
          paddingOuter: 0.3,
          title: {
            enabled: false,
          },
          label: {
            fontSize: 12,
          },
        },
        {
          type: 'number',
          position: 'left',
          title: {
            enabled: false,
          },
          label: {
            fontSize: 12,
            formatter: (params: { value: number }) => {
              return `${params.value} hrs`;
            },
          },
          min: 0,
          max: 1000,
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }
}
