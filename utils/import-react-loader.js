const reactElementToJsxString = require('react-element-to-jsx-string').default
const loaderUtils = require('loader-utils')

module.exports = function importReactLoader(source) {
  this.cacheable && this.cacheable()

  // console.log('source', source)

  // TODO: pickup - removed function callback here; readd once rEact is happy again
  const replaced = 'import React from \'react\'; export default ' + source

  console.log('after import added', replaced)

  return replaced
}

