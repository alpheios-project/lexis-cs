import path from 'path'
const projectRoot = process.cwd()
const webpack = {
  common: {
    context: projectRoot,
    entry: './index.js',
    output: { path: path.join(projectRoot, 'dist/test/') },
    resolve: {
      alias: {
        '@lexisCs': path.join(projectRoot, 'src')
      }
    }
  },

  production: {
    output: { filename: 'lexis-cs-test-bundle.min.js' }
  },
  development: {
    output: { filename: 'lexis-cs-test-bundle.js' }
  }
}

export { webpack }
