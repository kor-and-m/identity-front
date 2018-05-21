import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { reducers } from './share/reducers';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AuthGuard } from './share/guards/auth.guard';
import { UserService } from './share/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [CookieService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
