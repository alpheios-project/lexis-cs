import path from 'path'
const projectRoot = process.cwd()
const webpack = {
  common: {
    context: projectRoot,
    entry: './src/cedict-service/service.js',
    resolve: {
      alias: {
        '@lexisCs': path.join(projectRoot, 'src')
      }
    }
  },

  production: {
    output: { filename: 'service.min.js' }
  },
  development: {
    output: { filename: 'service.js' }
  }
}

export { webpack }
