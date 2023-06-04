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
    ],
    "rules": {
        quotes: 2,
        eqeqeq: 2,
    }
}
