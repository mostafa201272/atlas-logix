import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTenantListItemComponent } from './atlas-tenant-list-item.component';

describe('AtlasTenantListItemComponent', () => {
  let component: AtlasTenantListItemComponent;
  let fixture: ComponentFixture<AtlasTenantListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasTenantListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasTenantListItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
