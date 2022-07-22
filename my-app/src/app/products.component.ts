import { Component } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
  selector:'products',
  template:`
    <h1>products</h1>
    <div *ngIf="products.length == 0; else loading">No products to display</div>
    <ng-template #loading>
      <div *ngIf="products.length > 0">
        <div *ngFor="let product of products"><product [data]="product"></product></div>
      </div>
    </ng-template>
  `,
  providers:[ProductService]
})
export class ProductsComponent{
  products;
  constructor(productService: ProductService){
      this.products = productService.getProducts();
  }
}
