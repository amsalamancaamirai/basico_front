import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8000';

export interface SaludoResponse {
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHolaMundo(): Observable<SaludoResponse> {
    return this.http.get<SaludoResponse>(`${BASE_URL}/`);
  }

  getSaludoPersonalizado(nombre: string): Observable<SaludoResponse> {
    return this.http.get<SaludoResponse>(`${BASE_URL}/saludo/${nombre}`);
  }
}
