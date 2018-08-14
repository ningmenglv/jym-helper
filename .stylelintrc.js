module.exports = {
  processors: ['stylelint-processor-html'],
  extends: ['stylelint-config-standard'],
  rules: {
    indentation: 2,
    'rule-empty-line-before': 'always-multi-line',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'single'
  }
}
