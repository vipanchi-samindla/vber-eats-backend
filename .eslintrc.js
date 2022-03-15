module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
     'eslint-comments',
      'import',
        'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
  },

  settings: {
    "import/resolver": {
        "typescript": {
            "alwaysTryTypes": true,
            "project": "./tsconfig.json"
        }
    }
}
};
