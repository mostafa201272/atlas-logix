import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasIdentityComponent } from './atlas-identity.component';

describe('AtlasIdentityComponent', () => {
  let component: AtlasIdentityComponent;
  let fixture: ComponentFixture<AtlasIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasIdentityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasIdentityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
