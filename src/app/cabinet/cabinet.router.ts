import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { AboutComponent } from './about/about.component';
import { AboutApiComponent } from './about-api/about-api.component';

const mainRoutes: Routes = [
  {
    path: 'catalog',
    component: DashboardComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'api',
    component: AboutApiComponent,
  },
  {
    path: '**',
    redirectTo: 'catalog',
    pathMatch: 'full'
  }
];

export const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: mainRoutes,
  },
];