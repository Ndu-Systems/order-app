
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
 

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
        { path: '', redirectTo: 'orders', pathMatch: 'prefix' }, 
        { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' } 
        
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {}
