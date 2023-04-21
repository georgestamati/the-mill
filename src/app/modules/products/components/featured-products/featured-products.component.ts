import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {

  products: Product[] = [];
  categoryId = this.route.snapshot.paramMap.get('id') as string;
  productId = this.route.snapshot.paramMap.get('productId') as string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(productId?: string): void {
    this.productsService
      .getProductList()
      .pipe(
        tap((products) => {
          this.products = products.filter((item) =>
            item.category._id == this.categoryId &&
            item._id !== (productId ?? this.productId)
          );
        }),
        catchError(() => {
          return [];
        })
      )
      .subscribe();
  }

  openProduct({_id, category}: Product): void {
    this.router.navigate(['category/', category._id, 'product', _id]).then(() => {
      this.loadProducts(_id);
    });
  }
}
