import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryserviceService {

  sharedProduct = new Array();

  constructor() { }

  setData(data: any[]){
    this.sharedProduct = data
  }
  
  getData(){
    return this.sharedProduct
  }
}
