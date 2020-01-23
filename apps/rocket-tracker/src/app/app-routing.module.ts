import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor/auth-interceptor.service';
import { ExternalApiComponent } from './shared/components/external-api/external-api.component';

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
