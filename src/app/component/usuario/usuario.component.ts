import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];
  erroMensagem: string = '';
  username: string = ''; 
  password: string = ''; 

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || ''; 
    this.password = localStorage.getItem('password') || ''; 
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsers(this.username, this.password).subscribe({
      next: (data: any) => {
        if (data.length === 0) {
          this.erroMensagem = 'Nenhum usuário encontrado.';
        } else {
          this.usuarios = data;
          this.erroMensagem = '';
        }
      },
      error: (err: any) => {
        console.error('Erro ao buscar usuários:', err);
        this.erroMensagem = err.status === 401 
          ? 'Erro 401: Acesso não autorizado. Faça login novamente.'
          : 'Erro ao carregar usuários. Tente novamente mais tarde.';
      }
    });
  }

  excluirUsuario(userId: number) {
    if (confirm('Deseja apagar esse usuário?')) {
      this.usuarioService.deletarUsuario(userId, this.username, this.password).subscribe(
        response => {
          console.log("Usuário excluído com sucesso!", response);
          this.carregarUsuarios(); 
        },
        error => {
          console.log("Erro ao excluir usuário", error);   
        }
      );
    }
  }
  telaCriarUser(){
    this.router.navigate(['/criar'])
  }
}