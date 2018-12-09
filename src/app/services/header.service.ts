import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { console.log('Header service working...'); }
  getMenu() {
    return this.http.get(this.baseUrl + 'setting/type/header-menu');
  }
}
