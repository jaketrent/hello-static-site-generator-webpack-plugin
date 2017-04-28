console.log('JAke')

module.exports = function render(locals) {
  return '<html>' + locals.greet + ' from ' + locals.path + '</html>';
};
