import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { LoginComponent } from './login/login.component';
import { PdpComponent } from './pdp/pdp.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'women', component: WomenComponent},
  { path: 'men', component: MenComponent},
  { path: 'kids', component: KidsComponent},
  { path: ':prodCat/product/:id', component: PdpComponent},
  { path: 'cart', component: CartComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'register-product', component: RegisterProductComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
