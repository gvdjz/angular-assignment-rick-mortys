import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortysComponent } from './rick-and-mortys/rick-and-mortys.component';
import { ElapsedPipe } from './rick-and-mortys/Pipes/elapsed.pipe'
import { SortPipe } from './rick-and-mortys/Pipes/sort.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortysComponent,
    ElapsedPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
