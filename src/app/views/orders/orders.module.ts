import { OrdersRoutingModule } from './orders-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders';
import { MaterialModule } from '../../shared/material-design';
 

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ],
  declarations: [ListOrdersComponent]
})
export class OrdersModule { }
