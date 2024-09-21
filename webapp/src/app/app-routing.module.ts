import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EyeTestComponent } from './eye-test/eye-test.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FindClinicComponent } from './find-clinic/find-clinic.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'eye-test' , component : EyeTestComponent},
  {path : 'accessories' , component : AccessoriesComponent},
  {path : 'find-clinic' , component : FindClinicComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component :  SignupComponent},
  {path : 'not-found' , component : NotFoundComponent},
  {path : 'landing-page' , component : LandingPageComponent},
  {path : '**' , redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
