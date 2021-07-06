import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Category} from '../site-framework/category'
import { Observable } from 'rxjs';
import { Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient:HttpClient ) { }
  
  //SideBar
  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  //Get_All_Product
  get_All_Product(): Observable<Product>{
    const ProductUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(ProductUrl);
  }

  //Get_product
  view_Product(categoryId:Observable<Product>){
    const productUrl = 'http://localhost:3000/products/'+categoryId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  searchCategoryProducts(id: Observable<Product>){
    const productUrl = 'http://localhost:3000/products?categoryId='+id ;
    return this.httpClient.get<Product>(productUrl); 
  }

  createProduct(productBody: Observable<Product>){
    const productUrl = 'http://localhost:3000/products/';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId: Observable<Product>){
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  updateProduct(productId : Observable<Product>, productBody: Observable<Product>){
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  
  deleteProduct(productId: Observable<Product>){
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }
}
