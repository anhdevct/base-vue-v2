module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'error',
    'vue/no-unused-components': 'warn',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': ['error'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/order-in-components': ['error'],
    'vue/this-in-template': ['error', 'never'],
    
    // JavaScript rules
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'spaced-comment': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': ['error', { 'properties': 'always' }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eqeqeq': ['error', 'always'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'no-array-constructor': ['error'],
    'no-caller': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-multi-str': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-return-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-undef-init': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-void': ['error'],
    'no-with': ['error'],
    'wrap-iife': ['error', 'any']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
} 