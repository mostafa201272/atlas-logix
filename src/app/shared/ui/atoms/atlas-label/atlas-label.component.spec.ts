import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasLabelComponent } from './atlas-label.component';

describe('AtlasLabelComponent', () => {
  let component: AtlasLabelComponent;
  let fixture: ComponentFixture<AtlasLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasLabelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
