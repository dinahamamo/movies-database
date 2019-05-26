module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": true,
        "jsx": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": 0
    }
};