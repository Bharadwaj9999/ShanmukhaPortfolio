import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExperienceComponent } from './navbar-experience.component';

describe('NavbarExperienceComponent', () => {
  let component: NavbarExperienceComponent;
  let fixture: ComponentFixture<NavbarExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
