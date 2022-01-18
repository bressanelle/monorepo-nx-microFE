import { Component } from '@angular/core';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe1';
  firstName = '';
  lastName = '';

  constructor() {
    setInterval(() => {
      this.firstName = `${this.firstName}a`;
      this.lastName = `${this.firstName}b`;
    }, 3000);
  }
}
