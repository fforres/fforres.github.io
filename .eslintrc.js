module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "react/no-unknown-property": [
      2,
      {
        "ignore": [
          "jsx",
        ],
      },
    ],
  },
};
