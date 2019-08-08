'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env') //引入生成模式对象

//merge函数提供对象合并
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://39.98.190.128:8080"'
  // BASE_API: '"http://localhost:8080"'
})
