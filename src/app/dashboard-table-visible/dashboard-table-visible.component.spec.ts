import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTableVisibleComponent } from './dashboard-table-visible.component';

describe('DashboardTableVisibleComponent', () => {
  let component: DashboardTableVisibleComponent;
  let fixture: ComponentFixture<DashboardTableVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTableVisibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTableVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
