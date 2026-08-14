import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasProfileComponent } from './atlas-profile.component';

describe('AtlasProfileComponent', () => {
  let component: AtlasProfileComponent;
  let fixture: ComponentFixture<AtlasProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasProfileComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
