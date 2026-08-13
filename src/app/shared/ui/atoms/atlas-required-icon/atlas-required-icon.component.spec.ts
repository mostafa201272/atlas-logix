import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasRequiredIconComponent } from './atlas-required-icon.component';

describe('AtlasRequiredIconComponent', () => {
  let component: AtlasRequiredIconComponent;
  let fixture: ComponentFixture<AtlasRequiredIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasRequiredIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasRequiredIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
