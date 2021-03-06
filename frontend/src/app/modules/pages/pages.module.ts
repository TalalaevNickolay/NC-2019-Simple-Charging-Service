import { NgModule } from '@angular/core';

import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ProductpageComponent} from "./components/productpage/productpage.component";
import {AuthorisationModule} from "../authorisation/authorisation.module";
import {SharedModule} from "../shared/shared.module";
import {ProductModule} from "../product/product.module";
import { ProfileComponent } from './components/profile/profile.component';
import {ModalsModule} from "../modals/modals.module";
import { UsersComponent } from './components/users/users.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NewcompanyComponent } from './components/newcompany/newcompany.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProductService} from "../../services/product-service";
import { NotfoundComponent } from './components/notfound/notfound.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user-service";
import {RoleService} from "../../services/role-service";
import {CategoryService} from "../../services/category-service";
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../services/auth-interceptor-service";
import {AuthService} from "../../services/auth-service";
import {BillingAccountService} from "../../services/billingaccount-service";
import {SubscriptionService} from "../../services/subscription-service";
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    RegistrationComponent,
    ProductpageComponent,
    ProfileComponent,
    UsersComponent,
    CompaniesComponent,
    NewcompanyComponent,
    NewproductComponent,
    NotfoundComponent,
    ErrorpageComponent,
    SubscribeComponent,
    SearchComponent,
    AboutComponent,
  ],
  imports: [
    AuthorisationModule,
    SharedModule,
    ProductModule,
    ModalsModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule,
  ],
  exports:[
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    RegistrationComponent,
    ProductpageComponent,
    ProfileComponent,
    UsersComponent,
    CompaniesComponent,
    NewcompanyComponent,
    NewproductComponent,
    NotfoundComponent,

  ],
  providers: [
    ProductService,
    UserService,
    RoleService,
    CategoryService,
    AuthService,
    AuthInterceptor,
    BillingAccountService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    SubscriptionService
  ]
})
export class PagesModule { }
