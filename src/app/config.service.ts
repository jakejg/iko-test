import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:4000';
  request: Object;

  getProducts() {
    console.log(this.http);
    this.http.get(`${this.url}/products`).subscribe((data) => {
      console.log(data);
    });
  }
}
