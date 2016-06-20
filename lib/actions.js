'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = setLocale;
function setLocale(locale) {
  return {
    type: 'SET_LOCALE',
    locale: locale
  };
}