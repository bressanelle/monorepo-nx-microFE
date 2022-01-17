import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ui-kit',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@frontend/ui-kit',
      directivesProxyFile:
        '../../../libs/ui-kit-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/ui-kit/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/ui-kit/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
