import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { ErrorService } from "./components/error/error.service";
import { Router } from "@angular/router";

@Injectable()

class AppInterceptor implements HttpInterceptor {

    constructor(private errorService: ErrorService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', 'http://localhost:3000/api'),
                withCredentials: true,
            })
        }
        return next.handle(req).pipe(
            catchError(err => {
                if (err.status === 401) {
                    this.errorService.setError(err);
                    this.router.navigate(['login']);
                }
                else{
                    this.errorService.setError(err);
                    this.router.navigate(['error']);
                }
                return [err]; 
            })
        )
    }
}

export const AppInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
} 