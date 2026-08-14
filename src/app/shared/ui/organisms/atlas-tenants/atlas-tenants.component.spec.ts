import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTenantsComponent } from './atlas-tenants.component';

describe('AtlasTenantsComponent', () => {
  let component: AtlasTenantsComponent;
  let fixture: ComponentFixture<AtlasTenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasTenantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasTenantsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
