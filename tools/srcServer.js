const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.js');
const open = require('open');

const port = 3002
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
