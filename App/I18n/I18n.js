// @flow

import I18n from 'react-native-i18n';

const configure = () => {
  // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
  I18n.fallbacks = true;

  // English language is the main language for fall back:
  I18n.translations = {
    en: require('./languages/en.json'),
  };

  const languageCode = I18n.locale.substr(0, 2);

  // All other translations for the app goes to the respective language file:
  switch (languageCode) {
    case 'en':
      I18n.translations.en = require('./languages/en.json');
      break;
    case 'es':
      I18n.translations.es = require('./languages/es.json');
      break;
  }
};

export default configure;
