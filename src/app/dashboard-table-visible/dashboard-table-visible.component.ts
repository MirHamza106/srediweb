import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-dashboard-table-visible',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './dashboard-table-visible.component.html',
})
export class DashboardTableVisibleComponent {
  themeClass = 'ag-theme-quartz';
  rowData = [
    {
      Name: 'Theresa Webb',
      TimesheetExpected: 54,
      UnconfirmedTimesheet: 21,
      ConfirmedTimesheet: 22,
      MissingTimesheets: 11,
    },
    {
      Name: 'Darrell Steward',
      TimesheetExpected: 57,
      UnconfirmedTimesheet: 12,
      ConfirmedTimesheet: 33,
      MissingTimesheets: 11,
    },
    {
      Name: 'Marvin McKinney',
      TimesheetExpected: 99,
      UnconfirmedTimesheet: 34,
      ConfirmedTimesheet: 44,
      MissingTimesheets: 11,
    },
    {
      Name: 'Theresa Webb',
      TimesheetExpected: 54,
      UnconfirmedTimesheet: 21,
      ConfirmedTimesheet: 22,
      MissingTimesheets: 11,
    },
    {
      Name: 'Darrell Steward',
      TimesheetExpected: 57,
      UnconfirmedTimesheet: 12,
      ConfirmedTimesheet: 33,
      MissingTimesheets: 11,
    },
    {
      Name: 'Marvin McKinney',
      TimesheetExpected: 99,
      UnconfirmedTimesheet: 34,
      ConfirmedTimesheet: 44,
      MissingTimesheets: 11,
    },
  ];

  height = 46 * this.rowData.length + 'px';

  colDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'TimesheetExpected' },
    { field: 'UnconfirmedTimesheet' },
    { field: 'ConfirmedTimesheet' },
    { field: 'MissingTimesheets' },
  ];
  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor() {}
}
