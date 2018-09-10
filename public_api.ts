
/**
 * Entry point for all public APIs of the package.
 */

// This file only reexports content of the `src` folder. Keep it that way.
export { ConfigModule } from './src/app/modules/config/config.module';
export { PageNotFoundComponent } from './src/app/modules/config/pages/not-found.component';
export { SelectivePreloadingStrategy } from './src/app/modules/config/pre-load/selective-preloading-strategy';

/**
 * app
 */
export { AppConfig } from './src/app/modules/config/app/app-config';
export { configAppProviders } from './src/app/modules/config/app';
export { APP_CONFIG, APP_DI_CONFIG } from './src/app/modules/config/app/app.config';

/**
 * guard
 */
export { AuthGuardService } from './src/app/modules/config/auth/guard/auth-guard.service';
export { CanDeactivateGuard, CanComponentDeactivate } from './src/app/modules/config/auth/guard/can-deactivate-guard.service';

/**
 * auth
 */
export { AuthInterceptor } from './src/app/modules/config/auth/auth.interceptor';
export { AuthService } from './src/app/modules/config/auth/auth.service';
export { authProvider } from './src/app/modules/config/auth/auth.provider';

/**
 * logger
 */
// export { MessageLoggerModule } from './src/app/modules/config/logger/message-logger.module';
// export { MessageLoggerService } from './src/app/modules/config/logger/message-logger.service';
// export { MessagesLoggerComponent } from './src/app/modules/config/logger/messages-logger.component';

/**
 * error
 */
// export { MessageHandlerModule } from './src/app/modules/config/exception/message-handler.module';
export { HttpErrorHandler, HandleError, handlerProviderDialog  } from './src/app/modules/config/exception/http-error-handler.service';

/**
 * material
 */
export { MaterialModule } from './src/app/modules/config/material/app.material.module';
export { ErrorStateMatcherSubmit } from './src/app/modules/config/material/errorStateMatcher-submit';
/**
 * interceptor
 */
export  { httpInterceptorProviders } from './src/app/modules/config/interceptors/index';

/**
 * cache
 */
export { cacheProviders } from './src/app/modules/config/cache/index';
export { UtilsCache } from './src/app/modules/config/cache/utils-cache.service';

/**
 * MessagesHandlerComponent
 */
export { MessagesHandlerComponent } from './src/app/modules/config/exception/messages-handler.component';
export { MessageHandlerService } from './src/app/modules/config/exception/message-handler.service';
