/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Provider } from 'injection-js';

import { AuthInterceptor } from '../auth/auth.interceptor';
import { CachingInterceptor } from './caching.interceptor';
import { EnsureHttpsInterceptor } from './ensure-https.interceptor';
import { NoopInterceptor } from './noop.interceptor';
import { TrimNameInterceptor } from './trim-name.interceptor';
import { UploadInterceptor } from './upload.interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },

  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },

];
