# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Storybook

### Запуск

```bash
npm run storybook
```

Откроется Storybook на `http://localhost:6006`.

### Сборка статики (CI/деплой)

```bash
npm run build-storybook
```

Результат будет в `storybook-static/`.

### Где лежат сторисы

- Сторисы: `src/stories/**/*.stories.{ts,tsx}`
- Демо-компоненты для Storybook: `src/stories/*`
- Глобальные декораторы/параметры: `.storybook/preview.tsx`

### Как писать новую историю (пример)

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '@mui/material/Button'

const meta = {
  title: 'MUI/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Кнопка', variant: 'contained' as const },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Contained: Story = {}
export const Outlined: Story = { args: { variant: 'outlined' } }
```

### MUI тема в Storybook

Мы уже подключаем `ThemeProvider` и `CssBaseline` глобально в `.storybook/preview.tsx`, поэтому MUI-компоненты в сторисах будут выглядеть так же, как в приложении.

## Biome

### Проверки и автофикс

```bash
npm run lint
npm run lint:fix
```

### Форматирование

```bash
npm run format
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
