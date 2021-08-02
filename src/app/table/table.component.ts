import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroceryserviceService } from '../services/groceryservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  product:any[]=[]
  grandTotal!: number;
  constructor(private groceryService:GroceryserviceService) { 
    this.product = this.groceryService.sharedProduct;
  }
  
  ngOnInit(): void {
  }
  onClickSubmit(){
    this.grandTotal = this.product.reduce(function (accumulator, item) {
      let temptotal  = (accumulator + (item.unit * item.amount))
      return temptotal;
    }, 0);  
   
    return this.grandTotal.toFixed(2);
  }
  
  Editme($event: any){
    
  }

  Deleteme(element: any){
    console.log("Hi I am deletable")
    this.product.splice(element,1);
    this.grandTotal -= (element.unit * element.amount);
    this.grandTotal.toFixed(2);
  }
}
