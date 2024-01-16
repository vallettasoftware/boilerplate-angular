import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableInput, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  handle<T>(error: HttpErrorResponse, validValue?: T): T {
    //add toaster and logging
    return validValue;
  }
}
