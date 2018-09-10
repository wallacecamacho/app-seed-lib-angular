import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Constants } from '../constants/constants';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  cachedRequests: Array<HttpRequest<any>> = [];

  public getToken(): string {
    return localStorage.getItem(Constants.token_app) || sessionStorage.getItem(Constants.token_app);
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    // return tokenNotExpired(null, token);
    if ( token ) {
      return true;
    }
    return false;
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  public login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}
