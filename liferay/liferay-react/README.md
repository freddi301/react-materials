# liferay-react

- `npm install -g @liferay/cli` https://github.com/liferay/liferay-frontend-projects/blob/master/projects/js-toolkit/docs/manuals/liferay-cli.md
- `liferay new my-project` (platform -> react)
- `yarn deploy` or `yarn build` -> copy jar from `dist`

## More integrations

- typescript
  - see .babelrc (we added "@babel/preset-typescript")
  - fixed ts errors see `main.tsx` `App.tsx` `Liferay.tsx`
- add `yarn start command` width webpack
  - see `package.json` start script
  - see `package.json` dependencies
  - see `webpack.config.js`
  - see `public/index.html`
  - see `webpack.config.js` and `Liferay.ts` for proxy configuration
