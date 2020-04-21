import { Component, OnInit } from '@angular/core';
import { Task5Service } from '../services/task5.service'

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {

  constructor(private task5Service : Task5Service) { }

  ngOnInit() {
  }

  toggleTheme() {
    console.log(this.task5Service.isDarkTheme())
    if (this.task5Service.isDarkTheme()) {
      this.task5Service.setLightTheme();
    } else {
      this.task5Service.setDarkTheme();
    }
  }

}
