import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private subject = new Subject<any>();
  // The Difference b/w Subject and BehaviorSubject is that in BehaviorSubject
  // we set initial value .
  private fromMessageService = new BehaviorSubject<string>('Default Message');
  currentMessage = this.fromMessageService.asObservable();
  
  changeMessage(message:string){
    this.fromMessageService.next(message);
  }

}
