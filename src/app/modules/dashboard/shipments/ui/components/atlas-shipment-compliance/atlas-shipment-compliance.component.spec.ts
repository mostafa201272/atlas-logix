import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentComplianceComponent } from './atlas-shipment-compliance.component';

describe('AtlasShipmentComplianceComponent', () => {
  let component: AtlasShipmentComplianceComponent;
  let fixture: ComponentFixture<AtlasShipmentComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentComplianceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentComplianceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
