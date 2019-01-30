import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>('');

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(newResponse : any) {
    this.messageSource.next(newResponse);
  }
}
