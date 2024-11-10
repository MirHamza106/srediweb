import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutCharDashboardComponent } from './donut-char-dashboard.component';

describe('DonutCharDashboardComponent', () => {
  let component: DonutCharDashboardComponent;
  let fixture: ComponentFixture<DonutCharDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutCharDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutCharDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
