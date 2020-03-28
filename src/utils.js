import React from 'react'

export function supplant(s, d) {
  for (var p in d) {
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
  }
  return s
}

export function translateKey(path, obj, safe) {
  return path.split('.').reduce((prev, curr) => {
    return !safe ? prev[curr] : prev ? prev[curr] : undefined
  }, obj)
}

export function createHTMLMarkup(html) {
  return { __html: html }
}

export function translate(translateFn, translations, locale, key, placeholders, isHTML, options = {}) {
  const result = translateFn(
      key,
      translations[locale]['messages']
  );
  const tagName = options.tagName || 'div';
  if (typeof placeholders === 'undefined') {
      return result
  }
  const finalResult = supplant(result, placeholders);
  return isHTML
      ? React.createElement(
          tagName,
          { dangerouslySetInnerHTML: createHTMLMarkup(finalResult) },
          null
      )
      : finalResult
}

export function translateUtil(translations, locale, key, placeholders, isHTML, options = {}) {
    return translate(translateKey, translations,locale,key,placeholders,isHTML,options)
}
