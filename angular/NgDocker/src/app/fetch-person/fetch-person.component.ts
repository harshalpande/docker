import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  subscribedMessage : Observable<Array<any>> =  this.data.getCurrentMessage(); 
  status : String;

  constructor(private data : DataService, 
              private messageService : MessageService) { 
      
  }

  ngOnInit() {
     this.data.getMessages();
  }

  onDeleteClick( user : String, idx: number) {
    
    
    this.data.deleteMessage(user, idx);
  }

  callStatusMessage(data : any) {

    this.messageService.add({severity:'success', summary:'Docker Message', detail: data});

  }
}
