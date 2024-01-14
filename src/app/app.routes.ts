import { Routes } from '@angular/router';
import { PATH } from './models/routes.model';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    pathMatch: 'full',
  },
  {
    path: PATH.root.auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [authGuard],
  },
];
