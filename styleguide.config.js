const packageInfo = require('./package')
const path = require('path')

module.exports = {
  title: `UI Components ${packageInfo.version}`,
  highlightTheme: 'monokai',
  theme: {
    color: {
      base: '#333',
      light: '#999',
      lightest: '#ccc',
      link: '#999',
      linkHover: '#f28a25',
      border: '#e8e8e8',
      name: '#363636',
      type: '#3273dc',
      error: '#c00',
      baseBackground: '#fff',
      codeBackground: '#f5f5f5',
      sidebarBackground: '#363636'
    }
  },
  styles: {
    Logo: {
      logo: {
        color: '#fff',
        fontWeight: 'bold'
      }
    }
  },
  sections: [
    {
      name: 'Installation',
      content: 'docs/installation.md',
      description: ''
    },
    {
      name: 'Typography helpers',
      content: 'docs/typography-helper.md',
      description: ''
    },
    {
      name: 'UI Components',
      components: 'src/components/**/index.js'
    },
    {
      components: 'src/components/style.js'
    }
  ],
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath)
    const arrDir = dir.split('/')
    const componentName = arrDir[arrDir.length - 1]
    if (componentName === 'components') return ''

    return `import { ${componentName} } from '${packageInfo.name}'`
  },
  webpackConfig: require('./configs/webpack.config.dev.js'),
  require: [
    'babel-polyfill'
  ]
}
