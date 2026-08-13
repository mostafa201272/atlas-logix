import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasFormInputTemplateComponent } from './atlas-form-input-template.component';

describe('AtlasFormInputTemplateComponent', () => {
  let component: AtlasFormInputTemplateComponent;
  let fixture: ComponentFixture<AtlasFormInputTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasFormInputTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasFormInputTemplateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
