import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../product.model';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService) { }
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action']

  ngOnInit(): void {
    this.productService.read().pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    ).subscribe((res) => {
      this.products = res;
    })
  }
}
