import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/products/services.service'
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  Product_list:any;
  constructor(private All_Product:ServicesService) { }

  ngOnInit(): void {
  this.All_Product.get_All_Product().subscribe(data=>{
this.Product_list=data;
  })
  }

}
