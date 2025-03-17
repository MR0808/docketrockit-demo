import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
        extends: compat.extends(
            "plugin:@typescript-eslint/recommended",
            "plugin:prettier/recommended", // Prettier rules
            "plugin:@next/next/core-web-vitals" // Next.js rules
        ),

        languageOptions: {
            parser: await import("@typescript-eslint/parser"),
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname
            }
        },

        plugins: {
            "@typescript-eslint": tseslint,
            prettier: prettier,
            "@next/next": nextPlugin
        },

        files: ["**/*.{ts,tsx}"],

        rules: {
            "react-hooks/exhaustive-deps": 0,
            "react/no-unescaped-entities": 0,
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "prettier/prettier": "off"
        }
    }
]);
