import { Component } from '@angular/core';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'rt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public auth: AuthService) { }
}
