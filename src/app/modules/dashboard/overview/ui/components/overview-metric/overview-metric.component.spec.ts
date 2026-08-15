import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMetricComponent } from './overview-metric.component';

describe('OverviewMetricComponent', () => {
  let component: OverviewMetricComponent;
  let fixture: ComponentFixture<OverviewMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewMetricComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewMetricComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
