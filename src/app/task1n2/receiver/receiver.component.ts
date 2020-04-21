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
    this.onlineStatusSubscription = this.task1n2Service.getOnlineStatus().subscribe(data => {
      this.onlineStatus = data;
      if (this.onlineStatus === true) {
        this.startPolling()
      } else {
        this.stopPolling()
      }
    })
    this.loginStatusSubscription = this.task1n2Service.isUserLoggedIn().subscribe(data => { 
      this.loginStatus = data;
    })
  }

  ngOnInit() {
  }

  getOnlineStatus(){
    return { status : this.onlineStatus}
  }

  startPolling() {
    this.polling = timer(0, 500)
      .subscribe(() => {
        this.date = new Date();
      })
  }
  
  stopPolling() {
    this.polling.unsubscribe()
  }

}
