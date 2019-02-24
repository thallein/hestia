'use strict'

const path = require('path')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '../src', dir)
  },

  assetsPath: function (_path) {
    const assetsSubDirectory = 'src/static'
    return path.posix.join(assetsSubDirectory, _path)
  }
}