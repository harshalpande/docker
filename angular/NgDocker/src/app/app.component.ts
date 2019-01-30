import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  providers: [FetchService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDocker';

  status : String;

  constructor() { }

 }

