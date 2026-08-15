import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentDetailsComponent } from './atlas-shipment-details.component';

describe('AtlasShipmentDetailsComponent', () => {
  let component: AtlasShipmentDetailsComponent;
  let fixture: ComponentFixture<AtlasShipmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
