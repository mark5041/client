import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente!: Cliente;
  private baseUrl: string = 'http://127.0.0.1:8080/WebService/api/clienteservice';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
      'Content-Type' : 'application/json'
    })
  }


  constructor(private _http: HttpClient) { }

  getClienti(): Observable<any> {
    return this._http.get(this.baseUrl+'/clienti',this.httpOptions).pipe(
      map((response => response)));
  }

  deleteCliente(id: number): Observable<any> {
    return this._http.delete(this.baseUrl+'/delete/'+id, this.httpOptions).pipe(
      map((response => response)));
  }

  setter(cliente : Cliente) {
    this.cliente = cliente;
  }

  getter() {
    return this.cliente;
  }
}
