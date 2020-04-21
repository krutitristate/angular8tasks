import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task1n2Service {
  private onlineStatusSubject = new Subject<any>();
  private loginStatusSubject = new Subject<any>();

  constructor() { }

  sendOnlineStatus(status: Boolean) {
    this.onlineStatusSubject.next(status);
  }

  getOnlineStatus(): Observable<Boolean> {
    return this.onlineStatusSubject.asObservable();
  }

  sendLoginStatus(status: Boolean) {
    this.loginStatusSubject.next(status);
  }

  isUserLoggedIn(): Observable<Boolean> {
    return this.loginStatusSubject.asObservable();
  }

}
