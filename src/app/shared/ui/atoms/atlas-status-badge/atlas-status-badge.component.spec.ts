import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasStatusBadgeComponent } from './atlas-status-badge.component';

describe('AtlasStatusBadgeComponent', () => {
  let component: AtlasStatusBadgeComponent;
  let fixture: ComponentFixture<AtlasStatusBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasStatusBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasStatusBadgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
