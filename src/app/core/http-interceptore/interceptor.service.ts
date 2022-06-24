import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  retry,
  throwError,
  mergeMap,
  of
} from 'rxjs';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  errorResponse$ = new BehaviorSubject<any>({});
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse) {
          
        // }
        return event;
      }),
      //handling error from server and client
      catchError((error: HttpErrorResponse) => {
        let errorMessage = ' ';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `error : ${error.error.message} ${error.name}`;
        } else {
          errorMessage = error.error;
        }
        return throwError(() => of(errorMessage));
      })
    );
  }
}
