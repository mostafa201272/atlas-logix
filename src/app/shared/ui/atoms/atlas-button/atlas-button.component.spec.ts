import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasButtonComponent } from './atlas-button.component';

describe('AtlasButtonComponent', () => {
  let component: AtlasButtonComponent;
  let fixture: ComponentFixture<AtlasButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
