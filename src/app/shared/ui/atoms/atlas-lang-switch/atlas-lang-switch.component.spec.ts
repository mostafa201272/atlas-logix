import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasLangSwitchComponent } from './atlas-lang-switch.component';

describe('AtlasLangSwitchComponent', () => {
  let component: AtlasLangSwitchComponent;
  let fixture: ComponentFixture<AtlasLangSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasLangSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasLangSwitchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
