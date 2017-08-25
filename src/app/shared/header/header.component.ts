import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private AuthService: AuthService) {
  }

  logOut() {
    this.AuthService.logOut();
  }
  currentUser() {
    return this.AuthService.currentUser();
  }
}
