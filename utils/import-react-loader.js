const reactElementToJsxString = require('react-element-to-jsx-string').default
const loaderUtils = require('loader-utils')

module.exports = function importReactLoader(source) {
  this.cacheable && this.cacheable()

  // console.log('source', source)

  // TODO: convert class= to className=
  return 'var React = require("react")\n module.exports = ' + source
}

