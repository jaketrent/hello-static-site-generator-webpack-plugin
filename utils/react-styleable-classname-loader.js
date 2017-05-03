module.exports = function reactStyleableClassNameLoader(source) {
  const replaced = source
    .replace(/className="(\w+)"/g, 'className={(props.css || {})[\'$1\']}')

  console.log('styleable replaced', replaced)

  return replaced
}

