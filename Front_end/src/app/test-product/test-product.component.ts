import { Component, OnInit } from '@angular/core';

import { IProduct } from '../app.interface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-test-product',
  templateUrl: './test-product.component.html',
  styleUrl: './test-product.component.css'
})
export class TestProductComponent {
  title = 'Test';
  productPayLoad: IProduct ={
    productId:0,
    productName: '',
    productPrice:0
  }
  
  allProductResponse: any ={
    productId:0,
    productName: '',
    productPrice:0
  }

  editProductPayLoad:IProduct ={
    productId:0,
    productName: '',
    productPrice:0
  }
  
  ngOnInit(): void {
    this.showProduct();
  }

  constructor(private _service:ServicesService){}

  public addNewProduct(){
    this._service.addNewProduct(this.productPayLoad).subscribe(
      response => {
        console.log('Product added:', response);
        this.showProduct();
        this.productPayLoad={
          productId:0,
          productName: '',
          productPrice:0
        }
      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }

  public showProduct(){
    this._service.showAllProducts().subscribe(
      response => {
         this.allProductResponse=response; 
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  public deleteProduct(productId : number){
    this._service.deleteProduct(productId).subscribe(
      response => {
        this.showProduct(); 
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  public assignEditPayLoad(editPayLoad: any){
   this.editProductPayLoad=editPayLoad;
  }

  public editProduct(editProductPayLoad: any){
    this._service.editProduct(editProductPayLoad).subscribe(
      response => {
        this.showProduct(); 
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
