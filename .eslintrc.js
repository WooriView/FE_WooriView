module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "import", "functional"],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    quotes: ["off", "single"],
    "arrow-parens": ["off", "always"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/no-unresolved": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/extensions": "off",
    "linebreak-style": "off",
    "space-in-brackets": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unsafe-optional-chaining": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "operator-linebreak": ["error", "after", { overrides: { ":": "before" } }],
    "object-curly-newline": "off",
  },
};
