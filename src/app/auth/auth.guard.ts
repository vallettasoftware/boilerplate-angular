import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { BrowserStorageService } from '../helpers/browser-storage.service';
import { PATH } from '../models/routes.model';


export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    const isResetPasswordPage = state.url.startsWith(`/${PATH.root.auth}/${PATH.auth.resetPassword}`);
    if (isResetPasswordPage) {
      inject(BrowserStorageService).clearLocalStorage();
    }

    return inject(AuthService).isAuthorized$.pipe(
      map(hasAuth => hasAuth ? inject(Router).createUrlTree(['/']) : true),
    );
}
