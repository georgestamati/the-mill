import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() showHeader = true;

  isProductDetail = !!this.route.snapshot.paramMap.get('productId');

  constructor(private readonly route: ActivatedRoute, private router: Router){}

  goBackToProducts(): void {
    this.router.navigate(['/category/', this.product.category._id]);
  }
}
