import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MotorsComponent } from './motors/motors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyRocketsComponent } from './my-rockets/my-rockets.component';
import { RocketShowComponent } from './rocket-show/rocket-show.component';
import { NewRocketComponent } from './new-rocket/new-rocket.component';
import { NewManufacturerComponent } from './new-manufacturer/new-manufacturer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent,
    ExternalApiComponent,
    MotorsComponent,
    MyRocketsComponent,
    RocketShowComponent,
    NewRocketComponent,
    NewManufacturerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
