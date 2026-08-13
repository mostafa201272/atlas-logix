import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormPasswordInputComponent } from './atlas-form-password-input.component';

describe('AtlasFormPasswordInputComponent', () => {
  let component: AtlasFormPasswordInputComponent;
  let fixture: ComponentFixture<AtlasFormPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasFormPasswordInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasFormPasswordInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
