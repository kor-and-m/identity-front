import { Routes } from '@angular/router';

import { AuthGuard } from './share/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AuthGuard],
    data: { 
      auth: false,
    }
  },
  {
    path: 'apps',
    loadChildren: './cabinet/cabinet.module#CabinetModule',
    canActivate: [AuthGuard],
    data: { 
      auth: true,
    }
  },
  { path: '**', redirectTo: 'apps', pathMatch: 'full' },
];
