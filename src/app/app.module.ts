import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
  ],
  providers: [CookieService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
