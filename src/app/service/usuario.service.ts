import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://usuarioapi-young-brook-4416.fly.dev/usuario';

  constructor(private http: HttpClient) {}

  getUsers(username: string, password: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });

    return this.http.get(this.apiUrl, { headers });
  }
  deletarUsuario(userId: number, username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' +btoa(username+ ':' +password)
    })
   return this.http.delete(`${this.apiUrl}/${userId}`, {headers})
  }
}
