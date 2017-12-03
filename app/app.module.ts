import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';
import { CustomerModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
      BrowserModule
    , HttpModule
    , ProductModule
    , CustomerModule
    , VendorsModule
    , RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
