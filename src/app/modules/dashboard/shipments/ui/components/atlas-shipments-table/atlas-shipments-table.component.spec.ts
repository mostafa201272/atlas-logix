import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasShipmentsTableComponent } from './atlas-shipments-table.component';

describe('AtlasShipmentsTableComponent', () => {
  let component: AtlasShipmentsTableComponent;
  let fixture: ComponentFixture<AtlasShipmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasShipmentsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasShipmentsTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
