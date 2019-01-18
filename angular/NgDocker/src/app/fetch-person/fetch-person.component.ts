import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';
import { Observable } from 'rxjs';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  respInJSON: any;

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
}
