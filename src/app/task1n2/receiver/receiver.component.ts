import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task1n2Service } from '../../services/task1n2.service';
import { timer } from 'rxjs'

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  onlineStatusSubscription: Subscription;
  loginStatusSubscription: Subscription;
  onlineStatus: Boolean;
  loginStatus: Boolean;
  polling: any;
  date: any;

  constructor(private task1n2Service: Task1n2Service) {
    // Receives emit regarding the online status
    this.onlineStatusSubscription = this.task1n2Service.getOnlineStatus().subscribe(data => {
      this.onlineStatus = data;
      if (this.onlineStatus === true) {
        this.startPolling()
      } else {
        this.stopPolling()
      }
    })
    // Receives emit regarding the login status
    this.loginStatusSubscription = this.task1n2Service.isUserLoggedIn().subscribe(data => {
      this.loginStatus = data;
    })
  }

  ngOnInit() {
  }

  /**
   * @name startPolling
   * @desc startthe polling of the date every 500ms when online status in true
  */
  startPolling() {
    this.polling = timer(0, 500)
      .subscribe(() => {
        this.date = new Date();
      })
  }

  /**
   * @name stopPolling
   * @desc stop the polling of the date every 500ms when online status in false
  */
  stopPolling() {
    this.polling.unsubscribe()
  }

}
