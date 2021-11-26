import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }
  
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

}
