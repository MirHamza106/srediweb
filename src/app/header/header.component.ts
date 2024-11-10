import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostListener,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() drawer: any;
  innerWidth: number = 0;
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

  ngOnInit(): void {
    // if (window) {
    //   window?.onresize(() => {
    //     if (window?.innerWidth < 1200) {
    //       this.drawer.open = false;
    //       this.drawer.mode = 'push';
    //     } else {
    //       this.drawer.open = true;
    //       this.drawer.mode = 'side';
    //     }
    //   });
    // }
  }
}
