import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit, OnDestroy {

  numbers: any = [];
  myNumber = new Subject<any>();
  displayTimer: any;
  addTimer: any

  constructor() {
    // Receives the emit to display the data every 2s
    this.getNumber().subscribe(data => {
      this.numbers = [];
      this.numbers = data;
    }) 
   }

  ngOnInit() {
    this.set()
  }

  /**
   * @name getNumber
   * @desc return the number list 
  */
  getNumber(): Observable<Number> {
    return this.myNumber.asObservable();
  }

  ngOnDestroy(){
    this.displayTimer.unsubscribe();
    this.addTimer.unsubscribe();
  }

  /**
   * @name set
   * @desc set the timer to the subject number to add random number every 500 ms and display the number list every 2s
  */
  set(){
    let num = [], displayNumber = [];
    this.displayTimer = timer(0,2000)
    .subscribe(() => {
      displayNumber = [ ...num]
      this.myNumber.next(displayNumber);
    })
    this.addTimer = timer(0, 500)
    .subscribe(() => {
      num.push(Math.floor(Math.random() * 100));
    })
  }

  
}
