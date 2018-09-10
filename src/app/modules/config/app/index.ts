import { APP_CONFIG, APP_DI_CONFIG } from './app.config';

import { Provider } from 'injection-js';


export const configAppProviders: Provider[] = [
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG }
  ];
