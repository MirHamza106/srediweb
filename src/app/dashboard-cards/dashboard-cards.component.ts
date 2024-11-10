import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.scss'
})
export class DashboardCardsComponent {
  @Input() cards:any = [];

  ngOnInit(): void {}
}
