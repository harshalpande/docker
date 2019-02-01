import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { BehaviorSubject } from 'rxjs';
import { DeleteService } from './delete.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>('');


  constructor(private fetchService: FetchService, private deleteService: DeleteService, private messageService: MessageService) { }

  changeMessage(newResponse: any) {
    this.messageSource.next(newResponse);
  }

  getCurrentMessage() {
    return this.messageSource.asObservable();
  }

  getMessages() {
    this.fetchService.fetchPerson().subscribe(
      data => {
        this.changeMessage(data);
      },
      error => {
        console.log(error.message())
      }
    );
  }


  deleteMessage(user: String, idx: number) {

    this.deleteService.deletePerson(user).subscribe(
      (data) => {
        console.log("DELETE call successful value returned in body", data);
        this.callStatusMessage(data);
      },
      error => {
        console.log("DELETE call in error", error);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      }
    )
    this.respInJSON.splice(idx, 1);
  }

  callStatusMessage(data: any) {

    this.messageService.add({ severity: 'success', summary: 'Docker Message', detail: data });

  }

}
