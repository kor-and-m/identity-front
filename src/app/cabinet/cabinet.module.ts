import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatBadgeModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './../share/guards/auth.guard';
import { UserService } from './../share/services/auth.service';
import { ScopeService } from './../share/services/scope.service';

import { appRoutes } from './cabinet.router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { AboutComponent } from './about/about.component';
import { AboutApiComponent } from './about-api/about-api.component';
import { ScopeCardComponent } from './scope-card/scope-card.component';
import { UbdateScopeComponent } from './ubdate-scope/ubdate-scope.component';


@NgModule({
  declarations: [
  HeaderComponent,
  DashboardComponent,
  ManagementComponent,
  AboutComponent,
  AboutApiComponent,
  ScopeCardComponent,
  UbdateScopeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    HttpModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  providers: [UserService, AuthGuard, ScopeService],
})
export class CabinetModule { }