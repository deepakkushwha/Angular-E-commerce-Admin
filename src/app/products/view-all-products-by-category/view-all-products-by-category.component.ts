import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css'],
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  searchCategory: any;
  productList: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ServicesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=> {
      this.searchCategory = data.id;
    });
      this.productsService.searchCategoryProducts(this.searchCategory).subscribe((categoryData) => {
         this.productList = categoryData;
       
    });
   
  }
}
