//
// Load environment variables in.
//
// IMPORTANT:
//
//   1.  These might be null, so fallback to sane defaults accordingly where you
//       make use of these.
//
//   2.  You must use this syntax: process.env.NAME_OF_ENV_VAR.  No funny stuff
//       or the babel plugin won't work.
//
//   3.  You must whitelist each one in your `babel` config.
//
// GOTCHA:
//
//   Babel will cache things extensively. In dev, to bust this cache to pick up
//   new environment variable values, just change this file and resave it.
//
//   Or run `yarn start --reset-cache` to nuke babel's cache entirely
//   (overkill).
//
// ----------------------------------------------------------------------------

// tell typescript that there will be a the `node.js` process global variable used
declare var process: any;

/**
 * An example importing an environment variable.
 */
// const envConf = require('./../dotenv').config();
console.log('API', {
  API: process.env.API,
  env: process.env,
  REACT_APP_COSA: process.env.REACT_APP_COSA,
});
// Dev
console.disableYellowBox = true;

export const DEFAULT_STACK_SCREEN = 'Pets';
export const API: string | undefined = process.env.API;