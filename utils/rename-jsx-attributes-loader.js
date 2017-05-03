module.exports = function renameJsxAttributesLoader(source) {
  const replaced = source
    .replace(/class=/g, 'className=')


  console.log('jsx rename replaced', replaced)


  return replaced
}

