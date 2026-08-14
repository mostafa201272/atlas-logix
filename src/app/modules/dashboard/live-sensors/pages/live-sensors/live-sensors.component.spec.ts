import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSensorsComponent } from './live-sensors.component';

describe('LiveSensorsComponent', () => {
  let component: LiveSensorsComponent;
  let fixture: ComponentFixture<LiveSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveSensorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveSensorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
