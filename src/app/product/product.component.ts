import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Array;
  product: Object;
  productID: string;
  descriptionHidden = true;
  detailHidden = true;
  url = 'http://localhost:4000';
  isClothing = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // fetch all products
    this.http.get(`${this.url}/products`).subscribe((data) => {
      console.log(data);
      this.products = data;

      // get product id from url
      this.route.paramMap.subscribe((params) => {
        this.productID = params.get('id');

        // find product by id
        this.product = this.products.find((item) => item.id === +this.productID);

        if (this.product.type === 'clothing') {
          this.isClothing = true;
        }
      });
    });
  }

  toggleDescription() {
    this.descriptionHidden = !this.descriptionHidden;
  }

  toggleDetails() {
    this.detailHidden = !this.detailHidden;
  }
}
