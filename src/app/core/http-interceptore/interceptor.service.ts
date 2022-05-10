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
        if (event instanceof HttpResponse) {
          console.log('event');
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = ' ';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `error : ${error.error.message} ${error.name}`;
        } else {
          errorMessage = `Error Code : ${error.status}\nMessage ${error.message} ${error.type} `;
        }
        return throwError(() => new Error(error.error));
      })
    );
  }
}
