import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCard } from '../../../products/components/product-card/product-card';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { Pagination } from '../../../shared/components/pagination/pagination';

@Component({
  selector: 'app-cleaner-page',
  imports: [ProductCard, Pagination],
  templateUrl: './cleaner-page.html',
})
export class CleanerPage {

  route = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  paginationService= inject(PaginationService)

  gender = toSignal(this.route.params.pipe(map(({gender}) => gender )));


    productsResource = rxResource({
      request: () => ({
        gender: this.gender(),
        page: this.paginationService.currentPage() -1,
      }),
      loader: ({ request }) => {
        return this.productsService.getProducts({
          gender: request.gender,
          offset: request.page * 9,
        });
      }
    });


}
