import { Injectable } from '@angular/core';

export enum EStorageKeys {
  TOKEN = 'access_token',
  COMMON_PHRASES = 'common_phrases',
  INVESTIGATORS = 'investigators',
  CASES = 'cases',
  BUSINESS = 'business',
  ADMINS = 'admins',
  CLIENTS = 'clients',
  REPORTS = 'reports',
}

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  // SESSION STORAGE

  public addToSessionStorage(key: EStorageKeys, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public getFromSessionStorage<TModel>(key: EStorageKeys) {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data) as TModel;
  }

  public clearSessionStorage(keys: EStorageKeys[] = null) {
    if (keys === null) {
      sessionStorage.clear();
    } else {
      keys.forEach(key => sessionStorage.removeItem(key));
    }
  }

  // LOCAL STORAGE

  public addToLocalStorage(key: EStorageKeys, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getFromLocalStorage<TModel>(key: EStorageKeys) {
    const data = localStorage.getItem(key);
    return JSON.parse(data) as TModel;
  }

  public clearLocalStorage(keys: EStorageKeys[] = null) {
    if (keys === null) {
      localStorage.clear();
    } else {
      keys.forEach(key => localStorage.removeItem(key));
    }
  }
}
