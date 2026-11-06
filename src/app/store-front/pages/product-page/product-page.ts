import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarousel } from '../../../products/components/product-carousel/product-carousel';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
})
export class ProductPage {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService)

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResourse = rxResource({
    request: () => ({idSlug: this.productIdSlug}),
    loader: ({ request }) => {
      return this.productService.getProductByIdSlug(request.idSlug)
    }
  })
}
