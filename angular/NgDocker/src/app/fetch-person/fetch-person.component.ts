import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  baseUri : String = "http://localhost:8080/Docker/webapi/";

  obs : Observable<String>;
  respInJSON : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
     let obs = this.http.get(this.baseUri + "persons");
     obs.subscribe((response) => {
       console.log(response);
       this.respInJSON = response;
     });
  }

}
