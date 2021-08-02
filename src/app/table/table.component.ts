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
    //console.log(this.grandTotal)
    return this.grandTotal
  }
  
  Deleteme(element: any){
  }
}
