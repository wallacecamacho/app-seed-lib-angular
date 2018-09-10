import { Observable } from 'rxjs/Observable';
import { MessageValue } from './message-value';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MessageHandlerService {
  messages: string[] = [];

  constructor(private http: HttpClient) {
  }

  add(message: string) {
    this.messages.push(message);
  }

  get() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }

  logErrors(urlEndpoint: string , message: any): Observable<any> {
    return this.http.put<any>(urlEndpoint, message);
  }
}
