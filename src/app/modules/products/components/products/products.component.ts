import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, finalize  } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from "rxjs/operators";
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  loading$ = new BehaviorSubject<boolean>(false);
  products: Product[] = [];
  categoryId = this.route.snapshot.paramMap.get('id') as string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading$.next(true);
    this.productsService
      .getProductList()
      .pipe(
        tap((products) => {
          this.products = products.filter((item) => item.category._id == this.categoryId)
        }),
        catchError(() => {
          return [];
        }),
        finalize(() => {
          this.loading$.next(false);
        })
      )
      .subscribe();
  }

  openProduct({_id, category}: Product): void {
    this.router.navigate(['category/', category._id, 'product', _id]);
  }

  goBackToCategories(): void {
    this.router.navigate(['/home']);
  }
}
