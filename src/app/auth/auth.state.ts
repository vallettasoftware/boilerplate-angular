import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel } from './auth-state.model';
import { Injectable } from '@angular/core';
import { Login, Logout, Register } from './auth.actions';
import { catchError } from 'rxjs/operators';
import { AuthApiService } from './auth-api.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { Navigate } from '@ngxs/router-plugin';
import { PATH } from '../models/routes.model';

const INITIAL_STATE: AuthStateModel = {
  token: null,
  username: null,
};

@State<AuthStateModel>({
  name: 'auth',
  defaults: INITIAL_STATE,
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(
    private authApiService: AuthApiService,
    private errorHandler: ErrorHandlerService
  ) {}

  @Action(Register)
  register(ctx: StateContext<AuthStateModel>, action: Register) {
    return this.authApiService
      .register$(action.payload.email, action.payload.password)
      .pipe(catchError(this.errorHandler.handle))
      .subscribe((token) => {
        ctx.patchState({
          token,
          username: action.payload.email,
        });
      });
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authApiService
      .login$(action.payload.email, action.payload.password)
      .pipe(catchError(this.errorHandler.handle))
      .subscribe((token) => {
        ctx.patchState({
          token,
          username: action.payload.email,
        });
      });
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.setState(INITIAL_STATE);
    ctx.dispatch(new Navigate(['/', PATH.root.auth, PATH.auth.signIn]));
  }
}
