import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  // 1. Route for the Registration form
  { path: 'register', component: RegistrationComponent },
  
  // 2. Route for the Login form
  { path: 'login', component: LoginComponent },
  
  // 3. The Default Route (This is what makes Login show up first!)
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];