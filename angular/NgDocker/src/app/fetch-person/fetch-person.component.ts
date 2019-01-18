import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURI } from '../ApplicationConst';

@Component({
  selector: 'fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.css']
})
export class FetchPersonComponent implements OnInit {

  respInJSON : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
     let obs = this.http.get(baseURI + "persons");
     obs.subscribe(
       data => {
        this.respInJSON = data;
       }, 
       error => {
        this.respInJSON = error;
       }
     );
  }

}
