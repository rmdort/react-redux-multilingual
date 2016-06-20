module.exports = {
  supplant (s, d) {
    for (var p in d) {
      s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
    }
    return s
  },
  translateKey (path, obj, safe) {
    return path.split('.').reduce((prev, curr) => {
      return !safe ? prev[curr] : (prev ? prev[curr] : undefined)
    }, obj)
  },
  createHTMLMarkup (html) {
    return { __html: html }
  },
}
