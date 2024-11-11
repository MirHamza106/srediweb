




import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './dashboard-table.component.html',
})
export class DashboardTableComponent {
  themeClass = 'ag-theme-quartz';
  rowData = [
    {
      avatar: 'assets/avatars/1.jpg',
      name: 'Theresa Webb',
      trackingScore: '70 %',
      expectedHours: 120,
      workedHours: 20,
      trackedHours: 40,
      new: 10,
      fiber: 0,
      fdTest: 40,
      srAndEdHours: 40
    },
    {
      avatar: 'assets/avatars/2.jpg',
      name: 'Darrell Steward',
      trackingScore: '87 %',
      expectedHours: 100,
      workedHours: 10,
      trackedHours: 55,
      new: 22,
      fiber: 0,
      fdTest: 55,
      srAndEdHours: 55
    },
    {
      avatar: 'assets/avatars/3.jpg',
      name: 'Marvin McKinney',
      trackingScore: '125 %',
      expectedHours: 160,
      workedHours: 60,
      trackedHours: 10,
      new: 55,
      fiber: 0,
      fdTest: 10,
      srAndEdHours: 10
    },
    {
      avatar: 'assets/avatars/4.jpg',
      name: 'Brooklyn Simmons',
      trackingScore: '152 %',
      expectedHours: 220,
      workedHours: 22,
      trackedHours: 70,
      new: 60,
      fiber: 0,
      fdTest: 70,
      srAndEdHours: 70
    },
    {
      avatar: 'assets/avatars/5.jpg',
      name: 'Wade Warren',
      trackingScore: '95 %',
      expectedHours: 120,
      workedHours: 12,
      trackedHours: 50,
      new: 33,
      fiber: 0,
      fdTest: 50,
      srAndEdHours: 50
    }
  ];

  height = 46 * this.rowData.length + 'px';

  colDefs: ColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      
    },
    {
      field: 'trackingScore',
      headerName: 'Tracking Score',
      minWidth: 150
    },
    {
      field: 'expectedHours',
      headerName: 'Expected Hours',
      minWidth: 150
    },
    {
      field: 'workedHours',
      headerName: 'Worked Hours',
      minWidth: 150
    },
    {
      field: 'trackedHours',
      headerName: 'Tracked Hours',
      minWidth: 150
    },
    {
      field: 'new',
      headerName: 'New',
      minWidth: 100
    },
    {
      field: 'fiber',
      headerName: 'Fiber',
      minWidth: 100
    },
    {
      field: 'fdTest',
      headerName: 'FD Test',
      minWidth: 100
    },
    {
      field: 'srAndEdHours',
      headerName: 'SR&ED Hours',
      minWidth: 150
    }
  ];

  defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    sortable: true,
    filter: true
  };


  constructor() {}
}
