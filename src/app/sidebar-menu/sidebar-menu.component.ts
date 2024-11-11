import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  @Input() sectionHeading: string = '';
  @Input() menu: any[] = [];

  ngOnInit(): void {
    console.log(this.menu);
  }
}
