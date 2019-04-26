// Not work
// tell typescript that there will be a the `node.js` process global variable used
declare var process: any;

/**
 * An example importing an environment variable.
 */

console.log('API-dev', { API: process.env.API, env: process.env });

export const API: string | undefined = process.env.API;
