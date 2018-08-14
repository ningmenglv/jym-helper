#!/usr/bin/env node

const chalk = require('chalk')
const args = process.argv
const packageConfig = require('../package.json')

const help = () => {
  console.log(
    `\n    ` +
      packageConfig.name +
      chalk.green(' v' + packageConfig.version) +
      `\n\n    运行命令 :` +
      chalk.green('  node build <options>\n') +
      `
    <options> :\t\t\t例如node build development\n
    P | production\t\t打包生产环境\n
    R | rc\t\t\t打包预发布环境\n
    T | testing\t\t\t打包测试环境\n
    C | clouddev\t\t打包云开发环境\n
    D | development\t\t本地开发环境\n
    `
  )
}

let option = args.slice(2)

if (option.length) {
  option = option[0].toString()

  // 导入打包程序
  const index = require('./build')
  if (['P', 'production'].includes(option)) {
    index('production')
    return
  }
  if (['R', 'rc'].includes(option)) {
    index('rc')
    return
  }
  if (['T', 'testing'].includes(option)) {
    index('testing')
    return
  }
  if (['C', 'clouddev'].includes(option)) {
    index('clouddev')
    return
  }
  if (['D', 'development'].includes(option)) {
    index('development')
    return
  }
}

help()
