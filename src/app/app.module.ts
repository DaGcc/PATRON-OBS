import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagestwoComponent } from './pages/pagestwo/pagestwo.component';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages/pages/pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PagestwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
