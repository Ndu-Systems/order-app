import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { MainNavComponent } from '../main-nav';
import { ViewsRoutingModule } from './views-routing.module';
import { MaterialModule } from '../shared/material-design';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialModule
  ],
  declarations: [ViewsComponent, MainNavComponent]
})
export class ViewsModule { }
