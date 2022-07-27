import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientilistComponent } from './components/clientilist/clientilist.component';

import { RouterModule, Routes } from '@angular/router';
import { ClienteformComponent } from './components/clienteform/clienteform.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/cliente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', redirectTo:'home', pathMatch : 'full'},
  {path:'home', component: ClientilistComponent},
  {path:'form', component: ClienteformComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ClientilistComponent,
    ClienteformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue:'/'},
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
