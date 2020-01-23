import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ExternalApiComponent } from './external-api/external-api.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent,
    ExternalApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
