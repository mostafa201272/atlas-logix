import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormTextInputComponent } from './atlas-form-text-input.component';

describe('AtlasFormTextInputComponent', () => {
  let component: AtlasFormTextInputComponent;
  let fixture: ComponentFixture<AtlasFormTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasFormTextInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasFormTextInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
