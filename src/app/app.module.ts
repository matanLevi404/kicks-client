import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { LogoComponent } from './comps/logo/logo.component';
import { MyAccountComponent } from './comps/my-account/my-account.component';
import { ShoppingCartComponent } from './comps/shopping-cart/shopping-cart.component';
import { HoriNavbarComponent } from './comps/hori-navbar/hori-navbar.component';
import { SearchComponent } from './comps/search/search.component';
import { AccountDropMenuComponent } from './comps/account-drop-menu/account-drop-menu.component';
import { ImgSliderComponent } from './comps/img-slider/img-slider.component';
import { PageContainerComponent } from './comps/page-container/page-container.component';
import { VertiNavbarComponent } from './comps/verti-navbar/verti-navbar.component';
import { LeftColComponent } from './comps/left-col/left-col.component';
import { RightColComponent } from './comps/right-col/right-col.component';
import { ServiceComponent } from './comps/service/service.component';
import { TopProductsComponent } from './comps/top-products/top-products.component';
import { ProdCardComponent } from './comps/prod-card/prod-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';
import { BannersComponent } from './comps/banners/banners.component';
import { FeaturedProductsComponent } from './comps/featured-products/featured-products.component';
import { BannersSliderComponent } from './comps/banners-slider/banners-slider.component';

import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './comps/footer/footer.component';
import { FooterLeftComponent } from './comps/footer-left/footer-left.component';
import { FooterInfoComponent } from './comps/footer-info/footer-info.component';
import { FooterAccountComponent } from './comps/footer-account/footer-account.component';
import { FooterRightComponent } from './comps/footer-right/footer-right.component';
import { BigDealComponent } from './comps/big-deal/big-deal.component';
import { LatestProductsComponent } from './comps/latest-products/latest-products.component';
import { LeftBannerComponent } from './comps/left-banner/left-banner.component';
import { WhatSaysComponent } from './comps/what-says/what-says.component';
import { WhatSaysCardComponent } from './comps/what-says-card/what-says-card.component';
import { NewsLetterComponent } from './comps/news-letter/news-letter.component';
import { InformationComponent } from './comps/information/information.component';
import { SiteLayoutComponent } from './comps/site-layout/site-layout.component';
import { LoginComponent } from './loginComps/login/login.component';
import { NewCustomerComponent } from './loginComps/new-customer/new-customer.component';
import { ReturningCustomerComponent } from './loginComps/returning-customer/returning-customer.component';
import { RegisterComponent } from './registerComps/register/register.component';
import { ContactComponent } from './contactComps/contact/contact.component';
import { PrivacyPolicyComponent } from './privacyPolicyComps/privacy-policy/privacy-policy.component';
import { FeaturesComponent } from './featuresComps/features/features.component';
import { CartDropMenuComponent } from './comps/cart-drop-menu/cart-drop-menu.component';
import { MyCartComponent } from './myCartComps/my-cart/my-cart.component';
import { CartItemComponent } from './myCartComps/cart-item/cart-item.component';
import { CheckoutComponent } from './checkoutComps/checkout/checkout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar.service';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { HomeService } from './services/home.service';
import { ProductsGridComponent } from './comps/products-grid/products-grid.component';
import { VariablesService } from './variables/variables.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutService } from './services/checkout.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductViewComponent } from './productComps/product-view/product-view.component';
import { SuccessComponent } from './paymentViews/success/success.component';
import { FailedComponent } from './paymentViews/failed/failed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MyAccountComponent,
    ShoppingCartComponent,
    HoriNavbarComponent,
    SearchComponent,
    AccountDropMenuComponent,
    ImgSliderComponent,
    PageContainerComponent,
    VertiNavbarComponent,
    LeftColComponent,
    RightColComponent,
    ServiceComponent,
    TopProductsComponent,
    ProdCardComponent,
    BannersComponent,
    FeaturedProductsComponent,
    BannersSliderComponent,
    FooterComponent,
    FooterLeftComponent,
    FooterInfoComponent,
    FooterAccountComponent,
    FooterRightComponent,
    BigDealComponent,
    LatestProductsComponent,
    LeftBannerComponent,
    WhatSaysComponent,
    WhatSaysCardComponent,
    NewsLetterComponent,
    InformationComponent,
    SiteLayoutComponent,
    LoginComponent,
    NewCustomerComponent,
    ReturningCustomerComponent,
    RegisterComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    FeaturesComponent,
    CartDropMenuComponent,
    MyCartComponent,
    CartItemComponent,
    CheckoutComponent,
    ProductsGridComponent,
    ProductViewComponent,
    SuccessComponent,
    FailedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    SwiperModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard,
    SnackbarService,
    VariablesService,
    AuthService,
    HomeService,
    CartService,
    CheckoutService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
