import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {rules: {
    "comma-dangle": [2, 'only-multiline'],
    "semi": 2,
    "indent": [2, 2, { SwitchCase: 1 }],
    "no-extra-semi": 2,
    "consistent-return": 2,
    "curly": [2, 'all'],
    "default-case": 2,
    "dot-notation": 2,
    "eqeqeq": 2,
    "no-alert": 2,
    "no-useless-return": 2,
    "no-undef": "off",
    "radix": 2,
    "react/prop-types": 2,
  }}
];