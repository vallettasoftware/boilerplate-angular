import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AuthState } from './auth/auth.state';
import { AuthInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) =>
            new TranslateHttpLoader(http, './assets/i18n/', '.json'),
          deps: [HttpClient],
        },
      }),
      NgxsModule.forRoot([AuthState], {
        developmentMode: !environment.production,
      }),
      NgxsLoggerPluginModule.forRoot({
        collapsed: false,
        disabled: environment.production,
        // Use customLogger instead of console
        // logger: customLogger,
        // Do not log SomeAction
        // filter: action => getActionTypeFromInstance(action) !== SomeAction.type
      }),
      NgxsStoragePluginModule.forRoot({
        key: 'auth',
      }),
    ]),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
};
