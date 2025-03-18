import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { CriarUserComponent } from './component/criar-user/criar-user.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CriarUserComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
