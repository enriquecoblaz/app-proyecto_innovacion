import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  login(credentials: { dni: string; password: string }) {
    this.http.post(`${this.API_URL}/login`, credentials);
  }
}
