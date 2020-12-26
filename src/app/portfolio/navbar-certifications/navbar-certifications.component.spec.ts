import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCertificationsComponent } from './navbar-certifications.component';

describe('NavbarCertificationsComponent', () => {
  let component: NavbarCertificationsComponent;
  let fixture: ComponentFixture<NavbarCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
