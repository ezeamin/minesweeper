module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/naming-convention': 'off', // allow API_get... naming
    'import/extensions': 'off', // no extensions are needed in import statements
    'import/order': 'off', // customized order in .prettierrc
    'func-names': 'off', // disabled to allow IIFEs
    'import/no-extraneous-dependencies': 'off', // disabled to allow devDependencies
    'react/require-default-props': 'off', // deprecated check
    'import/no-absolute-path': 'off', // disabled to allow absolute paths from public folder
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    '.eslintrc.cjs',
    'postcss.config.cjs',
    'tailwind.config.js',
    'commitlint.config.ts',
    'vite.config.ts',
  ],
};
