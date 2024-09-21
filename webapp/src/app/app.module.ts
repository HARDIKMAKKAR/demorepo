import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { EyeTestComponent } from './eye-test/eye-test.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FindClinicComponent } from './find-clinic/find-clinic.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { PatientLandingPageComponent } from './patient-landing-page/patient-landing-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    EyeTestComponent,
    AccessoriesComponent,
    HomeComponent,
    FindClinicComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    HeaderComponent,
    PatientLandingPageComponent,
    AdminLandingPageComponent,
    // LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
