import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Login, Logout, Register } from './auth.actions';
import { AuthState } from './auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Select(AuthState.isAuthenticated) isAuthorized$: Observable<boolean>;

  constructor(private store: Store) {}

  public login(email: string, password: string): void {
    this.store.dispatch(new Login({ email, password }));
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }

  public register(email: string, password: string): void {
    this.store.dispatch(new Register({ email, password }));
  }
}
