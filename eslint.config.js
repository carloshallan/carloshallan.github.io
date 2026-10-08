import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'scripts/**', 'coverage/**']
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue']
      }
    }
  },
  prettierRecommended,
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      // Os componentes do projeto (Section, Button, Home...) são anteriores a
      // estas regras do eslint-plugin-vue 10
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
)
