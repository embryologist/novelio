// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBKb5Ys0Cqop_5qMF7EZYDdsM_L8U7ZDpw",
    authDomain: "novelio-scratch.firebaseapp.com",
    databaseURL: "https://novelio-scratch.firebaseio.com",
    projectId: "novelio-scratch",
    storageBucket: "gs://novelio-scratch.appspot.com/",
    messagingSenderId: "492775268534"
  }
};
