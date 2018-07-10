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
