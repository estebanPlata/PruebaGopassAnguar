import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'
import { MaterialModule } from 'src/app/material.module';
import { FilterPipe } from 'src/app/share/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyNewsComponent } from '../my-news/my-news.component';



@NgModule({
  declarations: [
    MainComponent,
    MyNewsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
  ],
  providers: [

  ]
})
export class MainModule { }
