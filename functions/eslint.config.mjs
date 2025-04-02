import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    plugins: { js }, extends: ["js/recommended"],
    ignores: ["node_modules/", ".eslintrc.js", "dist/", "lib/", "build/"]
  },
  tseslint.configs.recommended,
]);