import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentOverviewComponent } from './atlas-shipment-overview.component';

describe('AtlasShipmentOverviewComponent', () => {
  let component: AtlasShipmentOverviewComponent;
  let fixture: ComponentFixture<AtlasShipmentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentOverviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
