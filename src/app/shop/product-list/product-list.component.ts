import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  version: string | null = environment.version;
  products: Item[];
  url = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // fetch all products
    this.http.get(`${this.url}/products`).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
