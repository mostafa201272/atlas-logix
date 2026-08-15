import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTenantUsersTableComponent } from './atlas-tenant-users-table.component';

describe('AtlasTenantUsersTableComponent', () => {
  let component: AtlasTenantUsersTableComponent;
  let fixture: ComponentFixture<AtlasTenantUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasTenantUsersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasTenantUsersTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
