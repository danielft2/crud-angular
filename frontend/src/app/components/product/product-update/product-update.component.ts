import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { MyToastService } from 'src/app/services/toast/my-toast.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private myToast: MyToastService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  product: Product = {
    id: undefined,
    name: '',
    price: 0
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id as string).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    ).subscribe(p => {
      this.product.id = p.id;
      this.product.name = p.name;
      this.product.price = p.price;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    ).subscribe(p => {
      this.myToast.showMessageSucess('Produto atualizado com sucesso.');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
