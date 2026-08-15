import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewOperationalRecordComponent } from './overview-operational-record.component';

describe('OverviewOperationalRecordComponent', () => {
  let component: OverviewOperationalRecordComponent;
  let fixture: ComponentFixture<OverviewOperationalRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewOperationalRecordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewOperationalRecordComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
