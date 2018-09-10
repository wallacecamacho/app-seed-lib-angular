import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { MessageHandlerService } from '../exception/message-handler.service';
import { Constants } from '../constants/constants';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}



@Injectable()
export class RequestCacheWithMap implements RequestCache {

  cache = new Map<string, RequestCacheEntry>();

  constructor(private messenger: MessageHandlerService) { }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - Constants.maxAge);
    const expired = isExpired ? 'expired ' : '';
    this.messenger.add(
      `Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.messenger.add(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - Constants.maxAge;
    this.cache.forEach(entryCache => {
      if (entryCache.lastRead < expired) {
        this.cache.delete(entryCache.url);
      }
    });

    this.messenger.add(`Request cache size: ${this.cache.size}.`);
  }
}
