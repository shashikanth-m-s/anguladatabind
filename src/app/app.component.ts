import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anguladatabind';
  message="welcome to angular two way binding";
  greeting=" ";
  onClick(){
    this.greeting=" welcome to event binding";
  }
}
