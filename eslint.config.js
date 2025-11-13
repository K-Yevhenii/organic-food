import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist", "build", "node_modules"]),
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
        maxLen: { code: 120 },
        jsxQuotes: "double",
        trailingComma: "none",
        arrowParens: "always",
        bracketSpacing: true,
    }),
    {
        files: ["**/*.{js,jsx}"],
        extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "arrow-body-style": ["error", "as-needed"],
            "no-unused-vars": "off",
            "@stylistic/padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
        },
    },
]);
