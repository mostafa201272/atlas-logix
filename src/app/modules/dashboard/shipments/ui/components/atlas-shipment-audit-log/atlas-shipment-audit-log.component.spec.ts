import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentAuditLogComponent } from './atlas-shipment-audit-log.component';

describe('AtlasShipmentAuditLogComponent', () => {
  let component: AtlasShipmentAuditLogComponent;
  let fixture: ComponentFixture<AtlasShipmentAuditLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentAuditLogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentAuditLogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
