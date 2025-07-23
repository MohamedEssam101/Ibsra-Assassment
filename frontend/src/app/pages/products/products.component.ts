import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { AsyncPipe, CurrencyPipe, ViewportScroller } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink, RouterModule } from '@angular/router';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-products',
  imports: [
    AsyncPipe,
    ButtonModule,
    CardModule,
    CurrencyPipe,
    RouterModule,
    PaginatorModule,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  products$ = this.productService.products$;

  private readonly viewPortScroller = inject(ViewportScroller);
  ngOnInit(): void {
    this.productService.loadProducts();
    console.log(
      this.products$.subscribe((res) => {
        console.log(res);
      })
    );
  }
  nextPage(event: PaginatorState) {
    console.log(event.page || 0 + 1);
    this.productService.loadProducts((event.page || 0) + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
