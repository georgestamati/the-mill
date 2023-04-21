import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product> | undefined;

  isProductDetail = !!this.route.snapshot.paramMap.get('productId');

  constructor(
    private readonly productService: ProductsService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const _id = params.get('productId')!;

        return this.productService.getProduct(_id);
      }
    ));
  }
}
