import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor/auth-interceptor.service';
import { ExternalApiComponent } from './shared/components/external-api/external-api.component';
import { MotorsComponent } from './shared/components/motors/motors.component';
import { MyRocketsComponent } from './shared/components/my-rockets/my-rockets.component';
import { RocketShowComponent } from './shared/components/rocket-show/rocket-show.component';
import { NewRocketComponent } from './shared/components/new-rocket/new-rocket.component';
import { NewManufacturerComponent } from './shared/components/new-manufacturer/new-manufacturer.component';

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'external-api',
        component: ExternalApiComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'motors',
        component: MotorsComponent
      },
      {
        path: 'manufacturers',
        children: [
          {
            path: 'new',
            component: NewManufacturerComponent
          }
        ]
      },
      {
        path: 'my-rockets',
        children: [
          {
            path: '',
            component: MyRocketsComponent
          },
          {
            path: 'new',
            component: NewRocketComponent
          },
          {
            path: ':rocketId',
            component: RocketShowComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
