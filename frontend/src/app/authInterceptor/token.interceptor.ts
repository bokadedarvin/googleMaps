import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // stores session data

  constructor(
    public injector: Injector,
  ) {

  }

  /**
   * @description intercept every http request to add jwt Bearer token if present
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: Put this back in for INSTADAT servers when ready
    const jwttoken = 'DoPUQBErcpKPtRmbjpcFvbb8YCMeBjr4w6OcyjtA';
    request = request.clone({
      setHeaders: {
        // This is where you can use your various tokens
        Authorization: jwttoken,
        'Content-Type': 'application/json',
        // 'Accept-Encoding': 'gzip, deflate, br',
        'Accept': '*/*'
      }
    });
    return next.handle(request);
  }
}
