import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';
import { Observable } from 'rxjs';
import { FetchService } from '../fetch.service';
import { DataService } from '../data.service';

@Component({
  providers: [FetchService],
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  respInJSON : any;
  
  status : String;

  constructor(private http: HttpClient, private data : DataService, private fetchService : FetchService) { 
      
  }

  ngOnInit() {
    this.respInJSON = this.data.currentMessage.subscribe(message => this.respInJSON = message);
    if (this.respInJSON) {
      this.fetchService.fetchPerson().subscribe(
        data => {
          this.data.changeMessage(data);
        },
        error => {
          console.log(error.message())
        }
      );
    }
  }

  onDeleteClick(user : String, idx : number) {
    let obs: Observable<any>;
    let userToDelete: HttpParams = new HttpParams();
    userToDelete = userToDelete.append('key', user.toString());
       
    obs = this.http.delete(baseURI + "persons", {params : userToDelete});
    obs.subscribe(
      data => {
        this.status = data;
      }, 
      error => {
        this.status = error;
      }
    )
    this.respInJSON.splice(idx, 1);
  }
}
