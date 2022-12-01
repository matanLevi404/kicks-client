import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsGridComponent } from './comps/products-grid/products-grid.component';

import { RightColComponent } from './comps/right-col/right-col.component';
import { SiteLayoutComponent } from './comps/site-layout/site-layout.component';
import { ContactComponent } from './contactComps/contact/contact.component';
import { FeaturesComponent } from './featuresComps/features/features.component';
import { AuthGuard } from './guards/auth/auth.guard';

import { LoginComponent } from './loginComps/login/login.component';
import { MyCartComponent } from './myCartComps/my-cart/my-cart.component';
import { FailedComponent } from './paymentViews/failed/failed.component';
import { SuccessComponent } from './paymentViews/success/success.component';
import { ProductViewComponent } from './productComps/product-view/product-view.component';
import { RegisterComponent } from './registerComps/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: RightColComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'categories/:cat_name', component: ProductsGridComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'cart', component: MyCartComponent, canActivate: [AuthGuard] },
      { path: 'product/:id', component: ProductViewComponent },
      { path: 'payment-success', component: SuccessComponent },
      { path: 'payment-failed', component: FailedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
