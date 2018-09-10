import { configAppProviders } from './../app/index';

import { InjectionToken, Provider, ReflectiveInjector, ValueProvider } from 'injection-js';

export class NgPackagrApp {
    constructor(private providers: Provider[]) {}
}

export const mgPackagrApp = (): NgPackagrApp =>
  new NgPackagrApp([
    // Add default providers to this list.
    ...configAppProviders
]);
