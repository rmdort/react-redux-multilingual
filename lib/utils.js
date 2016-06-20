'use strict';

module.exports = {
  supplant: function supplant(s, d) {
    for (var p in d) {
      s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
    }
    return s;
  },
  translateKey: function translateKey(path, obj, safe) {
    return path.split('.').reduce(function (prev, curr) {
      return !safe ? prev[curr] : prev ? prev[curr] : undefined;
    }, obj);
  },
  createHTMLMarkup: function createHTMLMarkup(html) {
    return { __html: html };
  }
};