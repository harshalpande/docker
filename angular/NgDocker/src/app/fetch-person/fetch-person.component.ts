import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';
import { Observable } from 'rxjs';
import { Person } from '../add-person/add-person.component';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  respInJSON: any;
  status : String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {

    this.fetchPerson().subscribe(
      data => {
        this.respInJSON = data;
      },
      error => {
        this.respInJSON = error.message;
      }
    );
  }

  fetchPerson() {
    let obs: Observable<any>;
    obs = this.http.get(baseURI + "persons");
    return obs;
  }

  onDeleteClick(user : String) {
    let obs: Observable<any>;
    let userToDelete: HttpParams = new HttpParams();
    userToDelete = userToDelete.append('key', user.toString());
       
    obs = this.http.delete(baseURI + "persons", {params : userToDelete});
    obs.subscribe(
      data => {
        this.status = data;
        var index = this.respInJSON.indexOf(user, 0);
        if (index > -1) {
          this.respInJSON.splice(index, 1)
        }
      }, 
      error => {
        this.status = error;
      }
    )
  }
}
