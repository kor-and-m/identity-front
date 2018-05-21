import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
} from '@angular/material';

import { AuthGuard } from './../share/guards/auth.guard';
import { UserService } from './../share/services/auth.service';

import { LoginComponent } from './login/login.component'
import { appRoutes } from './auth.router';
import { RegistrationComponent } from './registration/registration.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    HttpModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [UserService, AuthGuard],
})
export class AuthModule { }
