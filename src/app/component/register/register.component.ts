import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  usuario = {nome: '', email: '', senha: '', cpf: ''};

  constructor(private http: HttpClient){}

  registrar(){
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('kazito:kazito10@') 
    });

    this.http.post('http://localhost:8080/usuario', this.usuario, { headers }).subscribe({
      next: (res) => {
        console.log("Usuário cadastrado com sucesso!", res);
        alert("Registro realizado com sucesso!");
      },
      error: (err) => {
        console.error("Erro ao cadastrar usuário!", err);
        alert("Erro ao criar usuário!");
      }
    });
  }
}
