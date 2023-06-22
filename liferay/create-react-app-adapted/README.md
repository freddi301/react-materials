# create-react-app liferay:adapt

- `yarn create react-app --template typescript my-app`
- `yo liferay-js:adapt` https://help.liferay.com/hc/en-us/articles/360035467712-Adapting-Existing-Apps-to-Run-on-Liferay-DXP
- `docker-compose up` see [docker compose file](./docker-compose.yaml)
- `yarn build:liferay`
- integration
  - `features/localization/Language.properties`
  - `features/configuration.json`
    - https://github.com/liferay/liferay-frontend-projects/blob/master/projects/js-toolkit/docs/reference/configuration-json.md
    - https://raw.githubusercontent.com/liferay/liferay-js-toolkit/master/resources/schemas/configuration.schema.json