import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LayoutComponent } from './layout/layout.component';

const mainRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: mainRoutes,
  },
];
