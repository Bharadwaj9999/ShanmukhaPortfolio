import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { NavbarAboutComponent } from './portfolio/navbar-about/navbar-about.component';
import { NavbarEducationComponent } from './portfolio/navbar-education/navbar-education.component';
import { NavbarContactComponent } from './portfolio/navbar-contact/navbar-contact.component';
import { NavbarExperienceComponent } from './portfolio/navbar-experience/navbar-experience.component';
import { NavbarQualificationsComponent } from './portfolio/navbar-qualifications/navbar-qualifications.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './portfolio/profile/profile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarCertificationsComponent } from './portfolio/navbar-certifications/navbar-certifications.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarAboutComponent,
    NavbarEducationComponent,
    NavbarContactComponent,
    NavbarExperienceComponent,
    NavbarQualificationsComponent,
    PortfolioComponent,
    ProfileComponent,
    NavbarCertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  NgbModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
