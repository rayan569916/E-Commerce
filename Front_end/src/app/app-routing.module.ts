import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestProductComponent } from './test-product/test-product.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './home-page/product/product.component';
import { ShoppingComponent } from './home-page/shopping/shopping.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'test',component: TestProductComponent},
  { path: 'home-page',component: HomePageComponent, 
    children:[
      {path:'product',component: ProductComponent},
      {path:'shopping', component:ShoppingComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
