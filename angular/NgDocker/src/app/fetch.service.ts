import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURI } from './ApplicationConst';
import { HttpClient } from '@angular/common/http';
import { Person } from './add-person/add-person.component';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchPerson() : Observable<any>{
    let obs: Observable<any>;
    obs = this.http.get(baseURI + "persons");
    return obs;
  }
}
