'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplant = supplant;
exports.translateKey = translateKey;
exports.createHTMLMarkup = createHTMLMarkup;
function supplant(s, d) {
  for (var p in d) {
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
  }
  return s;
}

function translateKey(path, obj, safe) {
  return path.split('.').reduce(function (prev, curr) {
    return !safe ? prev[curr] : prev ? prev[curr] : undefined;
  }, obj);
}

function createHTMLMarkup(html) {
  return { __html: html };
}