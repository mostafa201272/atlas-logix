import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormInputErrorTemplateComponent } from './atlas-form-input-error-template.component';

describe('AtlasFormInputErrorTemplateComponent', () => {
  let component: AtlasFormInputErrorTemplateComponent;
  let fixture: ComponentFixture<AtlasFormInputErrorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasFormInputErrorTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasFormInputErrorTemplateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
