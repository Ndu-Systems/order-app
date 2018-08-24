import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models';

 

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit { 
  displayedColumns: string[] = ['OrderId', 'TicketNumber', 'Status'];
  ORDER_DATA : Order[] = [
    {OrderId : 1, TicketNumber : 1, Status: "Active"},
    {OrderId : 2, TicketNumber : 2, Status: "Pending"},
    {OrderId : 3, TicketNumber : 3, Status: "Ready"}
   ];
  dataSource = this.ORDER_DATA;
  constructor() { }

  ngOnInit() {
  } 

}
