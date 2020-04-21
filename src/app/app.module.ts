import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1n2Component } from './task1n2/task1n2.component';
import { SenderComponent } from './task1n2/sender/sender.component';
import { ReceiverComponent } from './task1n2/receiver/receiver.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task6Component } from './task6/task6.component';
import { Task5Component } from './task5/task5.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1n2Component,
    SenderComponent,
    ReceiverComponent,
    Task3Component,
    Task4Component,
    Task6Component,
    Task5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
