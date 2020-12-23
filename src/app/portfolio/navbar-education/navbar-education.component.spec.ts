import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEducationComponent } from './navbar-education.component';

describe('NavbarEducationComponent', () => {
  let component: NavbarEducationComponent;
  let fixture: ComponentFixture<NavbarEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
