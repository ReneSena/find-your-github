module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        'eslint:recommended',
        'prettier/react',
        'prettier',
        'airbnb',
    ],
    parser: ['@typescript-eslint/parser'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'eslint-prettier-config',
        '@typescript-eslint',
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
    },
};
