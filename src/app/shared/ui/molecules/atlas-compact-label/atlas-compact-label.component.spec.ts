import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCompactLabelComponent } from './atlas-compact-label.component';

describe('AtlasCompactLabelComponent', () => {
  let component: AtlasCompactLabelComponent;
  let fixture: ComponentFixture<AtlasCompactLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasCompactLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasCompactLabelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
