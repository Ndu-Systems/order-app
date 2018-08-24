import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatMenuModule,
  MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule,
  MatListModule ,
  MatTableModule
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule],
})

export class MaterialModule {
}
