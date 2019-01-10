const { createMacro } = require('babel-plugin-macros')
const createNumericMacro = require('create-numeric-js-macro')

module.exports = createNumericMacro({
  libraryName: 'decimal.js-light.macro',
  libraryTarget: 'decimal.js-light',
  identifierName: 'Decimal',
  methods: {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
    '**': 'pow',
    '%': 'mod',
    '-@': 'neg',
  }
})
