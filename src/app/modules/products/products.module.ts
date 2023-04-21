import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service';
import { ProductsRoutingModule } from './products-routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    CountDownComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTooltipModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
