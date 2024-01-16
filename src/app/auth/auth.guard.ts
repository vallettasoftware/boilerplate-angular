import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { first, map } from 'rxjs/operators';

import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { BrowserStorageService } from '../helpers/browser-storage.service';
import { PATH } from '../models/routes.model';

export const nonAuthorizedGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isResetPasswordPage = state.url.startsWith(
    `/${PATH.root.auth}/${PATH.auth.resetPassword}`
  );
  if (isResetPasswordPage) {
    inject(BrowserStorageService).clearLocalStorage();
  }

  return inject(AuthService).isAuthorized$.pipe(
    map((hasAuth) => (hasAuth ? inject(Router).createUrlTree(['/']) : true))
  );
};

export const authorizedGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(AuthService).isAuthorized$.pipe(
    first(),
    map((hasAuth) => {
      console.debug(hasAuth);
      return !hasAuth
        ? router.createUrlTree(['/', PATH.root.auth, PATH.auth.resetPassword])
        : true;
    })
  );
};
