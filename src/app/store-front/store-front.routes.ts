import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CleanerPage } from './pages/cleaner-page/cleaner-page';
import { ProductPage } from './pages/product-page/product-page';
import { NoFoundPage } from './pages/no-found-page/no-found-page';
import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';



export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'gender/:gender',
        component: CleanerPage,
      },
      {
        path: 'product/:idSlug',
        component: ProductPage,
      },
      {
        path: '**',
        component: NoFoundPage,
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
  }

]

export default storeFrontRoutes;
