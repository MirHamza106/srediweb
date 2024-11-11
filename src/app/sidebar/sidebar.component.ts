import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    DashboardComponent,
    MatListModule,
    MatIconModule,
    SidebarMenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuTopObj: any[] = [];
  menuBottomObj: any[] = [];
  ngOnInit(): void {
    this.menuTopObj = [
      {
        active: true,
        menuIcon: 'home_outline',
        menuTitle: 'Overview',
        toggleExpand: false,
      },
      {
        active: false,
        menuIcon: 'shop',
        menuTitle: 'Navigation 02',
        toggleExpand: true,
      },
      {
        active: false,
        menuIcon: 'assignment',
        menuTitle: 'Navigation 03',
        toggleExpand: false,
      },
      {
        active: false,
        menuIcon: 'supervisor_account ',
        menuTitle: 'Navigation 04',
        toggleExpand: false,
      },
      {
        active: false,
        menuIcon: 'timeline',
        menuTitle: 'Navigation 06',
        toggleExpand: false,
      },
    ];
    this.menuBottomObj = [
      {
        active: false, 
        menuIcon: 'settings',
        menuTitle: 'Account & Settings',
        toggleExpand: false,
      },
      {
        active: false,
        menuIcon: 'help_outline',
        menuTitle: 'Help',
        toggleExpand: false,
      },
      {
        active: false,
        menuIcon: 'highlight',
        menuTitle: 'Dark Mode',
        toggleExpand: false,
      },
    ];
  }
}
