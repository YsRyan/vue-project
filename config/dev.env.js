'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 后端就绪后改为 false，请求会经 config/index.js 的 proxyTable 转发到后端
  USE_MOCK: 'true'
})
