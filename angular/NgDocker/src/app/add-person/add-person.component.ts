import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';

export interface Person {
  firstName: String;
  lastName: String;
  mobileNumber: String;
}

@Component({
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  fName: String;
  lName: String;
  telephone: String;

  status: String;
  user: Person;

  constructor(private httpclient: HttpClient) {

  }

  ngOnInit() {

  }

  onButtonClick() {

    this.user = {
      firstName: this.fName,
      lastName: this.lName,
      mobileNumber: this.telephone
    };

    let obs = this.httpclient.post(baseURI.toString() + "persons", this.user, { responseType: 'text' });
    obs.subscribe(
      data => {
        this.status = data;
      },
      error => {
        this.status = error;
      });
  }
}

