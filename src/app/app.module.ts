import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/home/components/product-list/product-list.component';
import { CartListComponent } from './pages/cart/components/cart-list/cart-list.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { SignupFormComponent } from './pages/signup/components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
