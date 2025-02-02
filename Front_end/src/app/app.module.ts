import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { TestProductComponent } from './test-product/test-product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './home-page/product/product.component';
import { ShoppingComponent } from './home-page/shopping/shopping.component';
import { AutoScrollDirective } from './auto-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LoginComponent,
    TestProductComponent,
    SignupComponent,
    HomePageComponent,
    ProductComponent,
    ShoppingComponent,
    AutoScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
