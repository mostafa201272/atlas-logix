import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCardComponent } from './atlas-card.component';

describe('AtlasCardComponent', () => {
  let component: AtlasCardComponent;
  let fixture: ComponentFixture<AtlasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
