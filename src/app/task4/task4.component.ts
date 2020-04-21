import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {

  changeDetection = new Subject<any>();
  keyword: String = "";
  messages = [
    'Hello',
    'Hi',
    'How are you',
    'Apple',
    'Hi, How are you',
    'Monday Morning',
    'Good Morning'
  ]
  display = false;
  searchedMessages = []

  constructor() { }

  ngOnInit() {
    //Receives the emit of the change throught getMessages
    this.getMessage().subscribe(data => {
      this.display = true;
      if (data !== '') {
        this.searchedMessages = this.messages.filter((m) => m.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
      } else {
        this.searchedMessages = []
      }
      setTimeout(() => { this.display = false; }, 6000)
    })
  }

  /**
   * @name onChange
   * @desc handle the change event of the search input box
  */
  onChange() {
    this.searchMessages(this.keyword);
  }

  ngOnDestroy() {
  }

  /**
   * @name searchMessages
   * @desc set the keyword in change detection
   * @param keyword {String}
  */
  searchMessages(keyword: String) {
    this.changeDetection.next(keyword);
  }

  /**
   * @name getMessage
   * @desc return the changed keyword
   * @param keyword {String}
  */
  getMessage(): Observable<String> {
    return this.changeDetection.asObservable();
  }
}
