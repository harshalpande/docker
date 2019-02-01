import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURI } from './ApplicationConst';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }


  deletePerson(user: String): Observable<any> {
    let deleteParam: HttpParams = new HttpParams();
    let deleteHeader: HttpHeaders = new HttpHeaders();
    deleteHeader.set('responseType', 'text/plain')
    deleteParam = deleteParam.append('key', user.toString());

    let obs: Observable<any> = this.http.request("DELETE", baseURI + "persons", 
                                                 { headers: deleteHeader, params: deleteParam });
    return obs;
  }
}
