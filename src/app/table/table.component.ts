import { Component, OnInit } from '@angular/core';
import { GroceryserviceService } from '../services/groceryservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  product:any[]=[]
  total = 0;
  constructor(private groceryService:GroceryserviceService) { 
    this.product = this.groceryService.sharedProduct;
  }
  
  ngOnInit(): void {
  }

  Deleteme(element: any){
    console.log( element )
  }
}
