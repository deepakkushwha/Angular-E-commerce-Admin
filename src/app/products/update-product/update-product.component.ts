import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId:any = 0;

  productDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ServicesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData; // get the existing data of the product
        console.log(this.productDetails);
      });

    });
  }

  updateProduct(form:any){
    const updateProduct:any = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
  };
    console.log(form);
    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log(data)
    });

    
  }

}
