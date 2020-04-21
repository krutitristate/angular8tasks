import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task1n2Service {
  private onlineStatusSubject = new Subject<any>();
  private loginStatusSubject = new Subject<any>();

  constructor() { }

  /**
   * @name sendOnlineStatus
   * @desc sends the online status
   * @param status {Boolean}
  */ 
  sendOnlineStatus(status: Boolean) {
    this.onlineStatusSubject.next(status);
  }

  /**
   * @name getOnlineStatus
   * @desc return the online status
   * @param status {Boolean}
  */
  getOnlineStatus(): Observable<Boolean> {
    return this.onlineStatusSubject.asObservable();
  }

  /**
   * @name sendLoginStatus
   * @desc sends the login status
   * @param status {Boolean}
  */ 
  sendLoginStatus(status: Boolean) {
    this.loginStatusSubject.next(status);
  }

  /**
   * @name isUserLoggedIn
   * @desc return the login status
   * @param status {Boolean}
  */ 
  isUserLoggedIn(): Observable<Boolean> {
    return this.loginStatusSubject.asObservable();
  }

}
