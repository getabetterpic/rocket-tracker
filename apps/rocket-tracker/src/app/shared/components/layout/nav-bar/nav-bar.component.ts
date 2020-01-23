import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'rt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public bars = faBars;
  constructor(public auth: AuthService) { }
}
