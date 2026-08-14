import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasSidebarComponent } from './atlas-sidebar.component';

describe('AtlasSidebarComponent', () => {
  let component: AtlasSidebarComponent;
  let fixture: ComponentFixture<AtlasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtlasSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
