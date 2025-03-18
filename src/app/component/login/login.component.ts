import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule] 
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  erroMensagem: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  getData() {
    this.usuarioService.getUsers(this.name, this.password).subscribe({
      next: (data: any) => {
        localStorage.setItem('username', this.name);
        localStorage.setItem('password', this.password);
        this.router.navigate(['/usuario']);
      },
      error: (err: any) => {
        console.error('Erro ao fazer login:', err);
        this.erroMensagem = 'Nome de usuário ou senha inválidos.';
      }
    });
  }
}
