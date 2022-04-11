# mynt-mono
Steps to run app
1. cd ~/mynt-components
2. npm run build
3. npm link
4. cd ~/mynt-app
5. npm link mynt-components
6. delete all Ionic components in ~/mynt-app/src/components/stencil-generated/index.ts
7. npm start
