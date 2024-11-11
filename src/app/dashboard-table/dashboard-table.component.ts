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
  styleUrl: './dashboard-table.component.scss',
})
export class DashboardTableComponent {
  themeClass = 'ag-theme-quartz';
  rowData = [
    {
      Name: 'Theresa Webb',
      TimesheetExpected: 54,
      UnconfirmedTimesheet: 21,
      ConfirmedTimesheet: 22,
      MissingTimesheets: 11,
      MissingTimesheets1: 11,
      MissingTimesheets2: 11,
      MissingTimesheets3: 11,
      MissingTimesheets4: 11,
      MissingTimesheets5: 11,
      MissingTimesheets6: 11,
      MissingTimesheets7: 11,
    },
    {
      Name: 'Darrell Steward',
      TimesheetExpected: 57,
      UnconfirmedTimesheet: 12,
      ConfirmedTimesheet: 33,
      MissingTimesheets: 11,
      MissingTimesheets1: 11,
      MissingTimesheets2: 11,
      MissingTimesheets3: 11,
      MissingTimesheets4: 11,
      MissingTimesheets5: 11,
      MissingTimesheets6: 11,
      MissingTimesheets7: 11,
    },
    {
      Name: 'Marvin McKinney',
      TimesheetExpected: 99,
      UnconfirmedTimesheet: 34,
      ConfirmedTimesheet: 44,
      MissingTimesheets: 11,
      MissingTimesheets1: 11,
      MissingTimesheets2: 11,
      MissingTimesheets3: 11,
      MissingTimesheets4: 11,
      MissingTimesheets5: 11,
      MissingTimesheets6: 11,
      MissingTimesheets7: 11,
    },
    {
      Name: 'Theresa Webb',
      TimesheetExpected: 54,
      UnconfirmedTimesheet: 21,
      ConfirmedTimesheet: 22,
      MissingTimesheets: 11,
      MissingTimesheets1: 11,
      MissingTimesheets2: 11,
      MissingTimesheets3: 11,
      MissingTimesheets4: 11,
      MissingTimesheets5: 11,
      MissingTimesheets6: 11,
      MissingTimesheets7: 11,
    },
    
    
    
     
    
  ];

  height = 46 * this.rowData.length + 'px';

  colDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'TimesheetExpected' },
    { field: 'UnconfirmedTimesheet' },
    { field: 'ConfirmedTimesheet' },
    { field: 'MissingTimesheets' },
    { field: 'MissingTimesheets1' },
    { field: 'MissingTimesheets2' },
    { field: 'MissingTimesheets3' },
    { field: 'MissingTimesheets4' },
    { field: 'MissingTimesheets5' },
    { field: 'MissingTimesheets6' },
    { field: 'MissingTimesheets7' },
  ];
  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor() {
    console.log(this.rowData.length);
  }
}
