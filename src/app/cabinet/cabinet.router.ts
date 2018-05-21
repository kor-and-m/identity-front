import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { AboutComponent } from './about/about.component';
import { AboutApiComponent } from './about-api/about-api.component';
import { UbdateScopeComponent } from './ubdate-scope/ubdate-scope.component';

const mainRoutes: Routes = [
  {
    path: 'catalog',
    component: DashboardComponent,
    data: { 
      action: 'watch',
    },
  },
  {
    path: 'catalog/:id',
    component: UbdateScopeComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'management/:id',
    component: UbdateScopeComponent,
    data: { 
      action: 'update',
    },
  },
  {
    path: 'create',
    component: UbdateScopeComponent,
    data: { 
      action: 'create',
    },
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