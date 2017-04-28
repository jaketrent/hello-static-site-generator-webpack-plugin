
// module.exports = function render(locals) {
//   return '<html>' + locals.greet + ' from ' + locals.path + '</html>';
// };


export default (locals) => {
  return '<html>Yola from ' + locals.path + '</html>';
};
