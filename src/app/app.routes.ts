import { Routes } from '@angular/router';
import { PATH } from './models/routes.model';
import { authorizedGuard, nonAuthorizedGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
    canActivate: [authorizedGuard],
  },
  {
    path: PATH.root.auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [nonAuthorizedGuard],
  },
];
