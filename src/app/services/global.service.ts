import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { console.log('Global service working...'); }
  allMenu() {
    return this.http.get(this.baseUrl + 'menu');
  }
  getById(menuId) {
    return this.http.get(this.baseUrl + 'menu/' + menuId);
  }
}
