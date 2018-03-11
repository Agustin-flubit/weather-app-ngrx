// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appApi: {
    baseUrl: 'http://api.openweathermap.org/data/2.5/forecast',
    apiKey: 'aba684555f49dc935f36ad3a15334642'
  }
};
