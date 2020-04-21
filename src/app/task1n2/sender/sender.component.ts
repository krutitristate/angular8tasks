import { Component, OnInit } from '@angular/core';
import { Task1n2Service } from '../../services/task1n2.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {


  onlineStatus = false;
  loginStatus = false;

  constructor(private task1n2Service : Task1n2Service) { }

  ngOnInit() {
  }

  /**
   * @name toggleOnlineStatus
   * @desc Toggle the online status and sent the emit of the current online status
  */
  toggleOnlineStatus() {
    this.onlineStatus = !this.onlineStatus;
    this.task1n2Service.sendOnlineStatus(this.onlineStatus);
    if(this.onlineStatus === false){
      this.loginStatus = false;
      this.task1n2Service.sendLoginStatus(this.loginStatus);
    }
  }

  /**
   * @name toggleUserLoginStatus
   * @desc Toggle the user's login status and sent the emit of the current login status
  */  
  toggleUserLoginStatus() {
    if(this.onlineStatus == true){
      this.loginStatus = !this.loginStatus;
      this.task1n2Service.sendLoginStatus(this.loginStatus);
    }
  }

}
