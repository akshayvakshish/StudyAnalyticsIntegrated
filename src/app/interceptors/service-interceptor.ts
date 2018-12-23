import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
        console.log("Intecepted!!!!");
        return next.handle(req); 
    }
}