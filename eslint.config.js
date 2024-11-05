import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  eslintJs.configs.recommended,
  eslintPluginPrettierRecommended,
  tseslint.configs.eslintRecommended,
  {
    ignores: ['**/dist', '.prettierrc.js'],
  },
  {
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // https://github.com/facebook/react/issues/28313
      'no-unused-vars': 'off',
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
