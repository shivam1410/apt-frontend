import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
