import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURI } from '../ApplicationConst';
import { Observable } from 'rxjs';
import { FetchPersonComponent } from '../fetch-person/fetch-person.component';
import { FetchService } from '../fetch.service';
import { DataService } from '../data.service';

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

  responseString : any;

  constructor(private httpclient: HttpClient, private fetchService : FetchService, private data : DataService) {

  }

  ngOnInit() {
    // Do not need Current Message here
    //this.data.currentMessage.subscribe(message => this.responseString = message);
  }

  onButtonClear() {
    this.fName = '';
    this.lName = '';
    this.telephone = '';
    this.desc = '';
    this.status = '';
  }

  onButtonSave() {

    this.user = {
      name: this.fName,
      surname: this.lName,
      mobileNo: this.telephone,
      description: this.desc
    };

      this.addPerson();     
  }

  fetchData() {
    this.fetchService.fetchPerson().subscribe(
        data => {
          this.data.changeMessage(data);
        },
        error => {
          console.log(error.message())
        }
      );
    }

    addPerson() {
      this.addPersons().subscribe(
        data => {
          this.status = data;
          this.fetchData();
        },
        error => {
          let errorMessage: String = error.message;
          this.status = errorMessage;
        });
    }

  addPersons() {
    let obs: Observable<any>;
    obs = this.httpclient.post(baseURI.toString() + "persons", this.user, { responseType: 'text' });
    return obs;
  }
}

