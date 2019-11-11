import path from 'path'
const projectRoot = process.cwd()
const webpack = {
  common: {
    context: projectRoot,
    entry: './index.js',
    resolve: {
      alias: {
        '@lexisCs': path.join(projectRoot, 'src')
      }
    }
  },

  production: {
    output: { filename: 'lexis-cs.min.js' }
  },
  development: {
    output: { filename: 'lexis-cs.js' }
  }
}

export { webpack }
