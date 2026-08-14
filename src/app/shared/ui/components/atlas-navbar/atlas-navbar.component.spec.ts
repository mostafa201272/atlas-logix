import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasNavbarComponent } from './atlas-navbar.component';

describe('AtlasNavbarComponent', () => {
  let component: AtlasNavbarComponent;
  let fixture: ComponentFixture<AtlasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
