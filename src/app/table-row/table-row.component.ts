import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroceryserviceService } from '../services/groceryservice.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
