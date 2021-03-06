import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent} from "./modules/pages/components/products/products.component";
import {HomeComponent} from "./modules/pages/components/home/home.component";
import {RegistrationComponent} from "./modules/pages/components/registration/registration.component";
import {ProductpageComponent} from "./modules/pages/components/productpage/productpage.component";
import {ProfileComponent} from "./modules/pages/components/profile/profile.component";
import {UsersComponent} from "./modules/pages/components/users/users.component";
import {CompaniesComponent} from "./modules/pages/components/companies/companies.component";
import {NewproductComponent} from "./modules/pages/components/newproduct/newproduct.component";
import {NewcompanyComponent} from "./modules/pages/components/newcompany/newcompany.component";
import {NotfoundComponent} from "./modules/pages/components/notfound/notfound.component";
import {ErrorpageComponent} from "./modules/pages/components/errorpage/errorpage.component";
import {SubscribeComponent} from "./modules/pages/components/subscribe/subscribe.component";
import {SearchComponent} from "./modules/pages/components/search/search.component";
import {AboutComponent} from "./modules/pages/components/about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'product/:id', component: ProductpageComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'users', component: UsersComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'newproduct', component: NewproductComponent},
  {path: 'newcompany', component: NewcompanyComponent},
  {path: 'error', component: ErrorpageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'subscribe/:id', component: SubscribeComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
