
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostListener,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule,FloatLabelType } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatBadgeModule,
    DatePipe
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() drawer: any;
  
  floatLabelControl = 'never' as FloatLabelType;
  innerWidth: number = 0;
  emailCount: number = 2;
  notificationCount: number = 8;
  fiscalStartDate: Date;
  fiscalEndDate: Date;

  constructor() {
    const currentDate = new Date();
    this.fiscalStartDate = new Date(currentDate.getFullYear(), 0, 1);
    this.fiscalEndDate = new Date(currentDate.getFullYear(), 11, 31);
  }

  @HostListener('window:resize', ['$event'])
  onresize(event: any) {
    if (window?.innerWidth < 1200) {
      this.drawer.open = false;
      this.drawer.mode = 'push';
    } else {
      this.drawer.open = true;
      this.drawer.mode = 'side';
    }
  }

  ngOnInit(): void {}
}