import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { CriarUserComponent } from './component/criar-user/criar-user.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path:'criar', component: CriarUserComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
