import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-user',
  standalone: false,
  templateUrl: './criar-user.component.html',
  styleUrl: './criar-user.component.scss'
})
export class CriarUserComponent {

  usuario = {nome: "", email: "", senha: "", cpf: ""}

  constructor(private http: HttpClient, private router: Router){}

  salvarUser(){
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' +btoa('kazito:kazito10@')
    });

    this.http.post('http://localhost:8080/usuario', this.usuario, {headers}).subscribe({
      next: (res) => {
        console.log("Usuario criado com sucesso!", res);
          this.router.navigate(['/usuario'])
        
      },
      error: (err) => {
        console.log("Erro ao criar usuário", err);
        
      }
    })
  }
}
