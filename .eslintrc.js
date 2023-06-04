module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "mocha": true,
    },
    "extends": [
        "eslint:recommended",
        'prettier',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        quotes: 2,
        eqeqeq: 2,
        'no-prototype-builtins': 0,
        'prettier/prettier': 'error',
    }
}
