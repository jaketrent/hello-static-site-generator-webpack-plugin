const ReactDOMServer = require('react-dom/server')
// const reactElementToJsxString = require('react-element-to-jsx-string').default
const HtmlToReactParser = require('html-to-react').Parser
const loaderUtils = require('loader-utils')

// console.log('reactElementToJsxString', reactElementToJsxString)

module.exports = function transformHtmlToReact(source) {
  this.cacheable && this.cacheable()

  const options = loaderUtils.getOptions(this)

  const parser = new HtmlToReactParser()
  const reactElement = parser.parse(source)
  // console.log('reactElement', reactElement)

  return reactElement

  // const str = reactElementToJsxString(reactElement)

  // console.log('str', str)
  // return str
}



// const jstransform = require('jstransform/simple')
// const loaderUtils = require('loader-utils')

// module.exports = function transformHtmlToReact(source) {
//   this.cacheable && this.cacheable()

//   const options = loaderUtils.getOptions(this)

//   // source = 'import React from \'react\' ' + source
//   const transform = jstransform.transform(source, Object.assign({}, options, {
//     react: true,
//     sourceMap: this.sourceMap
//   }))

//   console.log('transform', transform)

//   if (transform.sourceMap) {
//     transform.sourceMap.sources = [sourceFilename]
//     transform.sourceMap.file = current
//     transform.sourceMap.sourcesContent = [source]
//   }

//   this.callback(null, transform.code, transform.sourceMap)
// }

