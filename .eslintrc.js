// http://eslint.org/docs/user-guide/configuring

module.exports = {
 root: true,
 parser: 'babel-eslint',
 parserOptions: {
  sourceType: 'module'
 },
 env: {
  browser: true
 },
 globals: {
  JYM: true
 },
 extends: 'standard',
 plugins: ['html'],
 // add your custom rules here
 rules: {
  // 要求使用 let 或 const 而不是 var
  'no-var': 2,
  // reject允许不带参数
  'prefer-promise-reject-errors': 0,
  // 函数()左侧不要求必须空格
  'space-before-function-paren': 0,
  // 文件最后一行不要求必须留空行
  'eol-last': 0,
  // 可以使用debugger
  'no-debugger': 1,
  // 不要求严格比较 ===
  eqeqeq: 0,
  // 允许初始化未声明的变量
  'one-var': 0,
  "quotes": ["error", "single"]

 }
}
