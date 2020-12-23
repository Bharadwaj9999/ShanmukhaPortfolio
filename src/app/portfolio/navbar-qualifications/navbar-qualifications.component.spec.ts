import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarQualificationsComponent } from './navbar-qualifications.component';

describe('NavbarQualificationsComponent', () => {
  let component: NavbarQualificationsComponent;
  let fixture: ComponentFixture<NavbarQualificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarQualificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
