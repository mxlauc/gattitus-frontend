module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ["html"],
    extends: ["plugin:vue/vue3-strongly-recommended", "plugin:vue/vue3-essential", "@vue/standard"],
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "comma-dangle": ["error", "only-multiline"],
        camelcase: "off",
        quotes: ["error", "double"],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            }],
        "vue/html-closing-bracket-newline": ["error", {
            singleline: "never",
            multiline: "never"
        }],
        "vue/no-reserved-props": ["error", {
            vueVersion: 3, // or 2
        }],
        "vue/require-default-prop": "off",
        "vue/multi-word-component-names": "off",
        "import/first": "off",
        "vue/html-self-closing": "off",
    },
    globals: {
        fetchWithCookie: "readable",
        useRoute: "readable",
    },
}
