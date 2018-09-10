import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { authProvider } from './auth/auth.provider';
import { AuthModule } from './auth/auth.module';
import { UtilsCache } from './cache/utils-cache.service';
import { cacheProviders } from './cache/index';
import { httpInterceptorProviders } from './interceptors/index';
import { HttpErrorHandler } from './exception/http-error-handler.service';
import { AuthService } from './auth/auth.service';

import { MessageHandlerService } from './exception/message-handler.service';
import { configAppProviders } from './app/index';

import { MessagesHandlerComponent } from './exception/messages-handler.component';
import { AuthGuardService } from './auth/guard/auth-guard.service';
// simport { MessageLoggerModule } from './logger/message-logger.module';
// import { MessageLoggerService } from './logger/message-logger.service';
// import { MessagesLoggerComponent } from './logger/messages-logger.component';
import { PageNotFoundComponent } from './pages/not-found.component';

import { MaterialModule } from './material/app.material.module';
import { MessageHandlerModule } from './exception/message-handler.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule
],
exports: [
  MaterialModule,
  AuthModule
],
  declarations: [
    PageNotFoundComponent,
    MessagesHandlerComponent
  ],
  entryComponents: [
    MessagesHandlerComponent
  ],
  providers: [
    configAppProviders,
    AuthService,
    httpInterceptorProviders,
    cacheProviders,
    UtilsCache,
    authProvider,
    AuthGuardService,
   // MessageHandlerService
   MessageHandlerService,
   HttpErrorHandler
  ]
})
export class ConfigModule {}
