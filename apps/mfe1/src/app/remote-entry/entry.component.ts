import { Component } from '@angular/core';
import { UserService } from '@frontend/shared/data-access-user';

@Component({
  selector: 'frontend-mfe1-login',
  template: `
   <my-component></my-component>
  `,
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
