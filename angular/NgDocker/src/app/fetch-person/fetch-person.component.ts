import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { MessageService } from 'primeng/api';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  subscribedMessage : Observable<Array<any>> = this.dataService.getCurrentMessage(); 
  
  status : String;

  constructor(private dataService : DataService, 
              private messageService : MessageService,
              private fetchService : FetchService) { 
  }

  ngOnInit() {
     this.dataService.getMessages();
     this.subscribedMessage.subscribe(msg => console.log('new meesage arrived',msg))
  }

  deleteMessage( user : String, idx: number) {
    this.dataService.deleteMessage(user, idx);
  }

  callStatusMessage(data : any) {
    this.messageService.add({severity:'success', summary:'Docker Message', detail: data});
  }
}
