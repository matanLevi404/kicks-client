// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://kicks-server.onrender.com

export const environment = {
  production: false,
  apiURL: 'http://localhost:1001',
  token: () => localStorage.getItem('jwt'),
  ANGULAR_APP_PUBLISHABLE_KEY:
    'pk_test_51M8K6zDb07Qcgu34NfxVkZRs9MxQhZtKacgkGsDTzveSA8Y3DVPlw3RTq9jInGRIEEOwih6GzmPohdDrFqdhRm6j00O6igSdSY',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
