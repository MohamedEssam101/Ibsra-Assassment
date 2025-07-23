import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe, GalleriaModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  readonly Math = Math;
  private readonly productService = inject(ProductService);
  readonly route = inject(ActivatedRoute);
  selectedColor: string | null = null;
  selectedSize: string | null = null;

  readonly product$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    filter((id) => id !== null),
    switchMap((id) => this.productService.getProductsbyId(id))
  );
  selectColor(color: string) {
    this.selectedColor = color;
  }
  selectSize(size: string) {
    this.selectedSize = size;
  }
  addToCart(pId: string) {
    // call service api and send quantity, color ,size
    if (this.selectedColor && this.selectedSize) {
      console.log(pId, this.selectedColor, this.selectedSize);
    }
  }
}
