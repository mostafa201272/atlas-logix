import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComplianceDistributionChartComponent } from './overview-compliance-distribution-chart.component';

describe('OverviewComplianceDistributionChartComponent', () => {
  let component: OverviewComplianceDistributionChartComponent;
  let fixture: ComponentFixture<OverviewComplianceDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComplianceDistributionChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewComplianceDistributionChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
