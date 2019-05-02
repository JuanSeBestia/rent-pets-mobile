/**
 * Get assests of static files of server of app assets
 * example App/theme/assets/imgs/logo.png
 * is stored on https://rent-pets.firebaseapp.com/imgs/logo.png
 * 
 * Update files with firebase deploy
 * 
 * getFile('imgs/logo.png') => 'https://rent-pets.firebaseapp.com/imgs/logo.png'
 */
const URL_STATIC_HOSTING = 'https://rent-pets.firebaseapp.com/';
const getFile = (relativePath: String) =>
  `${URL_STATIC_HOSTING}${relativePath}`;
export default getFile;
