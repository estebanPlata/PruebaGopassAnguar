import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './share/services/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
