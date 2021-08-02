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
  tempTotal: any;
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
   
    return this.grandTotal.toFixed(2)
  }
  
  Editme(e:any){
    console.log("i am Editable");
    if(e.target.id=="Edit"){
      e.target.parentNode.parentNode.childNodes[0].contentEditable = true;
      e.target.parentNode.parentNode.childNodes[1].contentEditable = true;
      e.target.parentNode.parentNode.childNodes[2].contentEditable = true;  
      this.tempTotal = e.target.parentNode.parentNode.childNodes[3].textContent;
      e.target.className="fas fa-save"
      e.target.id="Save"    
    }
    else{
      console.log(this.tempTotal);
      e.target.parentNode.parentNode.childNodes[0].contentEditable = false;
      e.target.parentNode.parentNode.childNodes[1].contentEditable = false;
      e.target.parentNode.parentNode.childNodes[2].contentEditable = false;
      
      e.target.parentNode.parentNode.childNodes[3].textContent = 
      e.target.parentNode.parentNode.childNodes[1].textContent *
      e.target.parentNode.parentNode.childNodes[2].textContent ;
      
      this.grandTotal += e.target.parentNode.parentNode.childNodes[3].textContent - this.tempTotal;
      console.log(this.grandTotal)
      e.target.className="fas fa-edit"
      e.target.id="Edit"      
    }  
  }

  Deleteme(element: any){
    console.log("Hi I am deletable")
    this.product.splice(element,1);
    this.grandTotal -= (element.unit * element.amount);
    this.grandTotal.toFixed(2);
  }
}
