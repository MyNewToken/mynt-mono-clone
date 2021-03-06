import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'mynt-components',
  outputTargets: [
    /**
    react({
      componentCorePackage: 'mynt-components',
      proxiesFile: '../mynt-app/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
     */
    {
      type: 'dist-custom-elements',
      dir: '../mynt-qwik/dist/components',
      //autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
