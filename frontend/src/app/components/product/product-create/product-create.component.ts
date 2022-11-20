import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../product.model';
import { catchError, EMPTY } from 'rxjs';
import { MyToastService } from 'src/app/services/toast/my-toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private mytoast: MyToastService
  ) { }

  product: Product = {
    name: '',
    price: 0.0
  }

  ngOnInit(): void {
  }
  
  createProduct() {
    this.productService.saved(this.product).pipe(
      catchError((error: any) => {
        this.mytoast.showMessageSucess('Ocorreu um erro ao adicionar', true)
        return EMPTY;
      })
    ).subscribe((data: Product) => {
      this.mytoast.showMessageSucess('Produto Adicionado com sucesso.')
    })
  }
}
