import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasDashboardHeaderComponent } from './atlas-dashboard-header.component';

describe('AtlasDashboardHeaderComponent', () => {
  let component: AtlasDashboardHeaderComponent;
  let fixture: ComponentFixture<AtlasDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasDashboardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasDashboardHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
