import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      "@typescript-eslint/no-this-alias": "off",         // ✅ this aliasing ignore
      "@typescript-eslint/no-require-imports": "off",   // ✅ require() ignore
      "@typescript-eslint/no-unused-vars": "warn",      // ✅ unused variables warning
      "@typescript-eslint/no-unused-expressions": "off" // ✅ unused expressions ignore
    },
  },
];

export default eslintConfig;
