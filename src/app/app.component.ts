import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // npm i json-server -g
  // json-server --watch db.json --port 2345
  title = 'angular-posts-app';
}
