import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';
import {
  BrowserStorageService,
  EStorageKeys,
} from '../helpers/browser-storage.service';
import { AuthModel, IDecodedToken } from './auth.model';
import { PATH } from '../models/routes.model';
import { ErrorHandlerService } from '../sertvices/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized$ = new BehaviorSubject<boolean>(false);
  
  private readonly LOGIN_API = 'auth/token';
  private readonly REGISTER_API = 'auth/register';


  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: BrowserStorageService,
    private errorHandler: ErrorHandlerService
  ) // protected errorHandler: ErrorHandlerService,
  {}

  public login$(email: string, password: string) {
    const authModel = new AuthModel(email, password);
    // return this.http.post<string>(this.LOGIN_API, authModel).pipe(
    //   first(),
    //   catchError(error => this.errorHandler.handle(error)),
    //   tap(token => this.processLoginResponse(token))
    // );
  }

  private processLoginResponse(token: string) {
    this.storage.addToLocalStorage(EStorageKeys.TOKEN, token);
    this.router.navigateByUrl('/');
  }
}
