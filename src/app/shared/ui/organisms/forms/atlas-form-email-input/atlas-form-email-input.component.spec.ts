import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormEmailInputComponent } from './atlas-form-email-input.component';

describe('AtlasFormEmailInputComponent', () => {
  let component: AtlasFormEmailInputComponent;
  let fixture: ComponentFixture<AtlasFormEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasFormEmailInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasFormEmailInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
