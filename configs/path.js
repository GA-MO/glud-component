const path = require('path')

function resolvePath(pathName) {
  return path.resolve(process.cwd(), pathName)
}

module.exports = {
  build: resolvePath('build'),
  public: resolvePath('public'),
  htmlIndex: resolvePath('public/index.html'),
  htmlTemplate: resolvePath('public/template.html'),
  src: resolvePath('src'),
  indexFile: resolvePath('src/index.js'),
  nodeModule: resolvePath('node_modules')
}
