import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';
import { Observer, Observable } from 'rxjs';
import { FetchPersonComponent } from '../fetch-person/fetch-person.component';

export interface Person {
  name: String;
  surname: String;
  mobileNo: String;
  description: String;
}

@Component({
  providers: [FetchPersonComponent],
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  fName: String;
  lName: String;
  telephone: String;
  desc: String;

  status: String;
  user: Person;

  constructor(private httpclient: HttpClient, private fetchComp: FetchPersonComponent) {

  }

  ngOnInit() {

  }

  onButtonClick() {

    this.user = {
      name: this.fName,
      surname: this.lName,
      mobileNo: this.telephone,
      description: this.desc
    };

    this.fetchPersons().subscribe(
      data => {
        this.status = data;
      },
      error => {
        let errorMessage: String = error.message;
        this.status = errorMessage;
      });

    this.fetchComp.refreshComponent();
  }


  fetchPersons() {
    let obs: Observable<any>;
    obs = this.httpclient.post(baseURI.toString() + "persons", this.user, { responseType: 'text' });
    return obs;
  }
}

