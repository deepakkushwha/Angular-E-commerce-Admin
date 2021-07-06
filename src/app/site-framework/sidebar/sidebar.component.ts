import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/products/services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent implements OnInit {
  constructor(private productService: ServicesService) {}
  categoryList: any;
  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categoryList = data;
    });
  }
}
