import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { Iproduct } from '../product/IProduct';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private datasharingservice:DataSharingServiceService) { }
  AllProductsSearch:Iproduct[]= this.datasharingservice.products;
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['ID', 'NAME', 'MANUFACTURER',  'SHORTCODE','CATEGORY','SELLINGPRICE' ];
  
  id:number;
  name:string;
  pricegreaterthan:number;
  pricelessthan :number;
  priceequalto :number;

}
