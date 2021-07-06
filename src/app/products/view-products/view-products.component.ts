import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicesService} from 'src/app/products/services.service'

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

data:any
productDetails:any
  constructor( private activatedRoute: ActivatedRoute,
private productServices:ServicesService) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(data=>{
this.data=data.id;
})
   this.productServices.view_Product(this.data).subscribe(viewData=>{
     this.productDetails=viewData;
   })
  }

}
