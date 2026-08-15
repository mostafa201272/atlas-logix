import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentSensorHistoryComponent } from './atlas-shipment-sensor-history.component';

describe('AtlasShipmentSensorHistoryComponent', () => {
  let component: AtlasShipmentSensorHistoryComponent;
  let fixture: ComponentFixture<AtlasShipmentSensorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentSensorHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentSensorHistoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
