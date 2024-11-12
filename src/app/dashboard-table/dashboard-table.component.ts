// src/app/components/dashboard-table/dashboard-table.component.ts
import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { MockApiService } from '../services/mock-api.service';
import { TableData } from '../Constants/table-data.interface';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  providers: [MockApiService],
  templateUrl: './dashboard-table.component.html',
})
export class DashboardTableComponent implements OnInit {
  themeClass = 'ag-theme-quartz';
  rowData: TableData[] = [];
  height: string = '400px'; // Set a default height
  private gridApi!: GridApi;
  isLoading: boolean = true;
//header table data
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

  constructor(private tableService: MockApiService) {}

  ngOnInit() {
    this.loadTableData();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.showLoadingOverlay();
  }

  loadTableData() {
    this.isLoading = true;
    this.tableService.getAllTableData().subscribe({
      next: (data: TableData[]) => {
        this.rowData = data;
        this.isLoading = false;
        if (this.gridApi) {
          if (data.length === 0) {
            this.gridApi.showNoRowsOverlay();
          } else {
            this.gridApi.hideOverlay();
          }
        }
      },
      error: (error) => {
        console.error('Error loading table data:', error);
        this.isLoading = false;
        if (this.gridApi) {
          this.gridApi.showNoRowsOverlay();
        }
      }
    });
  }
}