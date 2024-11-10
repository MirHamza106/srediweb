import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { DonutCharDashboardComponent } from '../donut-char-dashboard/donut-char-dashboard.component';
import { DoubleBarChartComponent } from '../double-bar-chart/double-bar-chart.component';
import { DashboardCardsComponent } from '../dashboard-cards/dashboard-cards.component';
import { CommonModule } from '@angular/common';
import { DashboardTableVisibleComponent } from '../dashboard-table-visible/dashboard-table-visible.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardTableComponent } from '../dashboard-table/dashboard-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    DashboardTableComponent,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    DonutCharDashboardComponent,
    DoubleBarChartComponent,
    DashboardCardsComponent,
    CommonModule,
    DashboardTableVisibleComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cards: any = [];
  @Input() drawer: any;
  constructor() {
    if (window?.innerWidth > 1200) {
      this.drawer.mode = 'push';
    }
  }

  ngOnInit(): void {
    this.cards = [
      {
        dashboardCardTitle: 'Timesheets Expected',
        dashboardCardButton: 'Remind All',
        dashboardCardButtonToggle: false,
        dashboardCardLimit: '500',
        dashboardCardDiscountBackgroundColor: true,
        dashboardCardDiscountIcon: 'arrow_upward',
        dashboardCardDiscountPercent: '20',
      },
      {
        dashboardCardTitle: 'Timesheets Created',
        dashboardCardButton: 'Remind All',
        dashboardCardButtonToggle: false,
        dashboardCardLimit: '200',
        dashboardCardDiscountBackgroundColor: false,
        dashboardCardDiscountIcon: 'arrow_downward',
        dashboardCardDiscountPercent: '10',
      },
      {
        dashboardCardTitle: 'Timesheets Accepted',
        dashboardCardButton: 'Remind All',
        dashboardCardButtonToggle: false,
        dashboardCardLimit: '200',
        dashboardCardDiscountBackgroundColor: true,
        dashboardCardDiscountIcon: 'arrow_upward',
        dashboardCardDiscountPercent: '20',
      },
      {
        dashboardCardTitle: 'Missing Timesheets',
        dashboardCardButton: 'Remind All',
        dashboardCardButtonToggle: true,
        dashboardCardLimit: '300',
        dashboardCardDiscountBackgroundColor: false,
        dashboardCardDiscountIcon: 'arrow_downward',
        dashboardCardDiscountPercent: '10',
      },
    ];
  }
}
