import path from 'path'
const projectRoot = process.cwd()
const webpack = {
  common: {
    context: projectRoot,
    entry: './src/cedict-service/service.js',
    resolve: {
      alias: {
        '@lexisCs': path.join(projectRoot, 'src'),
        '@messServ': path.join(projectRoot, 'node_modules/alpheios-messaging/src'),
        'alpheios-messaging': path.join(projectRoot, 'node_modules/alpheios-messaging/dist/dev/alpheios-messaging.js')
      }
    }
  },

  production: {
    output: {
      path: path.join(projectRoot, 'dist/prod/'),
      filename: 'service.min.js'
    }
  },
  development: {
    output: {
      path: path.join(projectRoot, 'dist/dev/'),
      filename: 'service.dev.js'
    }
  }
}

export { webpack }
