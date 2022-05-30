import { App } from './components/app/app';

export const Root = () => {
  return (
    <html>
      <head>
        /** metaEvent?: goes in meta tag*/
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
        <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
        <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
        <script type="module" src="/dist/mynt-components/mynt-components.esm.js"></script>
        <script noModule src="/dist/esm/mynt-components.js"></script>
      </head>
      <body>
        <mynt-root src=""></mynt-root>
      </body>
    </html>
  );
};
