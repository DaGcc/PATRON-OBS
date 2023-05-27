import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages/pages.component';
import { PagestwoComponent } from './pages/pagestwo/pagestwo.component';

const routes: Routes = [
  {
    path:"app",
    component:PagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
