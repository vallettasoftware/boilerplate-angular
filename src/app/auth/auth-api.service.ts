import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly LOGIN_API = `${environment.baseUrl}/auth/token`;
  private readonly REGISTER_API = `${environment.baseUrl}/auth/register`;

  constructor(private http: HttpClient) {}

  public login$(email: string, password: string) {
    return this.http.post<string>(this.LOGIN_API, { email, password });
  }

  public register$(email: string, password: string) {
    return this.http.post<string>(this.REGISTER_API, { email, password });
  }
}
