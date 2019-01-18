import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';

export interface Person {
  name: String;
  surname: String;
  mobileNo: String;
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
      name: this.fName,
      surname: this.lName,
      mobileNo: this.telephone
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

