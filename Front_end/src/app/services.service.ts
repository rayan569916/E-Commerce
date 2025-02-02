import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, Login } from './app.interface';
import { Observable,throwError,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http: HttpClient) { }

  public loginFunctionService(loginPayload:Login):Observable<any>{
   return this._http.post<any>(`http://localhost:8080/app/login`,loginPayload).pipe(
    catchError(err => {
      console.error('Error occurred:', err);
      return throwError(err); 
    })
  );
  }

  public signupFunctionService(signupPayLoad:any){
    return this._http.post<any>(`http://localhost:8080/app/signup`,signupPayLoad).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  public addNewProduct(productPayLoad: IProduct):Observable<any>{
   return this._http.post<any>(`/add-product`,productPayLoad).pipe(
    catchError(err => {
      console.error('Error occurred:', err);
      return throwError(err); 
    })
  );
  }

  public showAllProducts():Observable<any>{
    return this._http.get(`/allProducts`).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  public deleteProduct(productId: number):Observable<any>{
    return this._http.delete(`/delete-product${productId}`).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  public editProduct(editProductPayLoad: IProduct):Observable<any>{
    return this._http.put(`/update-product`,editProductPayLoad).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this._http.post(`http://localhost:8080/images/upload`, formData).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  getImages(): Observable<any> {
    return this._http.get(`http://localhost:8080/images/get-image`).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }

  getImageById(img_id: number): Observable<any>{
    return this._http.get(`http://localhost:8080/images/get-image/${img_id}`).pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return throwError(err); 
      })
    );
  }
}
