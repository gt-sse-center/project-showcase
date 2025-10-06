import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import stylisticJs from "@stylistic/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(["build",]),
    {
        files: ['**/*.{ts,tsx}'],
        extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

        plugins: {
            react,
            "@stylistic/js": stylisticJs,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            "no-unused-vars": ["warn", {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
            }],

            "key-spacing": ["error", {
                afterColon: true,
            }],

            "@stylistic/js/indent": ["error", 2],
            "react/react-in-jsx-scope": "off",
        },
    }]);