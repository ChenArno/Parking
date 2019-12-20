module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  root: true,
  rules: {
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js']
      }
    ],
    'global-require': [0],
    'import/prefer-default-export': [0],
    'react/jsx-no-bind': [0],
    'react/prop-types': [0],
    'react/prefer-stateless-function': [0],
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'import/no-extraneous-dependencies': [0],
    'no-use-before-define': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'import/extensions': [0],
    'no-bitwise': [0],
    'no-cond-assign': [0],
    'linebreak-style': [0],
    'import/no-unresolved': [0],
    'require-yield': [1],
    'prefer-template': [0],
    'no-undef': [0],
    'no-param-reassign': [0],
    'no-useless-escape': [0],
    'no-plusplus': [0],
    'no-mixed-operators': [0],
    'object-shorthand': [0],
    'no-console': [0],
    'no-loop-func': [0],
    'class-methods-use-this': [0],
    radix: [0],
    'no-trailing-spaces': [0],
    'comma-dangle': [0],
    'no-underscore-dangle': [0],
    'react/require-default-props': [0],
    'no-unused-expressions': [0],
    'react/sort-comp': [0],
    'max-lines': [2, 500],
    'max-len': [2, 125],
    'react/jsx-boolean-value': [0],
    'react/react-in-jsx-scope': [0],
    'operator-assignment': [0],
    'no-fallthrough': [0],
    'react/no-array-index-key': [0],
    eqeqeq: [0],
    'react/no-multi-comp': [0],
    'react/no-unused-prop-types': [0],
    'prefer-const': [0]
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.common.config.js'
      }
    }
  }
}
