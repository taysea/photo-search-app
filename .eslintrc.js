module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "settings": {
    "ecmascript": 6,
    "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "react/destructuring-assignment": 0,
    "import/no-named-as-default": 0,
    "react/jsx-wrap-multilines": 0,
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
  }
};