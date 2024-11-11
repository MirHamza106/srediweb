
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursBarChartComponent } from './hours-bar-chart.component';

describe('DoubleBarChartComponent', () => {
  let component: HoursBarChartComponent;
  let fixture: ComponentFixture<HoursBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
