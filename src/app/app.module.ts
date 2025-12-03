import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ChangePasswordComponent } from './core/change-password/change-password.component';
import { AuthService } from './core/services/auth.service';
import { ThemeService } from './core/services/theme.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module'; 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,           
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedModule           
  ],
  providers: [
    AuthService,
    ThemeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
