// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Make sure this import path is correct

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createAccount(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-account`, data);
  }

  createAccountWithMob(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-account1`, data);
  }
}
