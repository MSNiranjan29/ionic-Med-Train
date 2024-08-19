import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add any additional headers or modify the request here if needed
    const modifiedReq = req.clone({
      // Example: Add Authorization header
      // headers: req.headers.set('Authorization', 'Bearer your-token')
    });
    return next.handle(modifiedReq);
  }
}
