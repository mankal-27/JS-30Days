import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Items } from '../item';
import { GroceryserviceService } from '../services/groceryservice.service';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {


  product:Items[]=[];
  //grandTotal!: number;
  constructor(private groceryService:GroceryserviceService) {
    this.product = this.groceryService.sharedProduct;
   }

  ngOnInit(): void {
    this.groceryService.setData(this.product)
  }

  onClickSubmit(data: NgForm){
    this.groceryService.sharedProduct.push(data.value);
    console.log(this.product)
  }
}
