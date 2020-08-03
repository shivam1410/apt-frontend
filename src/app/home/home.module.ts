import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';

//components
import { HomeComponent } from './home.component';
import { SleepComponent } from './sleep/sleep.component';
import { ReadingComponent } from './reading/reading.component';

  //material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HomeComponent,
    SleepComponent,
    ReadingComponent,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    //material
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
