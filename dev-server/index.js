#!/usr/bin/env node

const path = require('path')
const chalk = require('chalk')
const app = require('./app')

const PORT = 8080

const projectPath = path.resolve(__dirname, '..')

// require('./routes')

app.listen(PORT, () => {
  console.log(
    '\n🌍',
    chalk.yellowBright('dev-server'),
    chalk.whiteBright('running at'),
    chalk.cyanBright(`http://localhost:${PORT}\n`)
  )

  const ParcelBundler = require('parcel-bundler')
  const parcelBundler = new ParcelBundler(path.resolve(projectPath, 'src/index.html'), {})
  app.use(parcelBundler.middleware())
})
