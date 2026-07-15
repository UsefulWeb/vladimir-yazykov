# Владимир Языков — портфолио

Личный сайт-портфолио: направления работы (Frontend / Backend / FullStack / Team Lead / Обучение), 34 проекта с кейсами, резюме под каждое направление в формате CV, RU/EN.

🔗 [i.u-w.me](https://i.u-w.me)

## Стек

React 19, TypeScript, MUI, Vite, React Router, react-i18next, Feature-Sliced Design, Biome, Vitest + Storybook (component tests), lefthook + commitlint.

## Структура

```
src/slices/
  app/        — роутинг, провайдеры, глобальные стили
  pages/      — страницы (home, about, projects, resume, ...)
  widgets/    — крупные блоки (header, footer, stats, faq, ...)
  entities/   — карточки/сущности (project-card, direction-card, ...)
  features/   — изолированные фичи
  shared/     — конфиг, локали (ru.json/en.json), тема, ui-кит, утилиты
```

Slice-барьеры — `index.ts` в каждой папке, импорт только через них (`@pages`, `@widgets`, `@entities`, `@shared`, ...).

## Разработка

```bash
npm install
npm run dev              # http://localhost:5173
npm run build             # tsc -b + vite build → dist/
npm run lint:fix          # biome
npm run storybook         # http://localhost:6006
```

## i18n

Переводы — `src/slices/shared/locales/{ru,en}.json`. Контентные модели (`model/content.ts`, `model/roles.ts`, `model/projects.ts`) — хуки (`useXContent()`), тянут строки через `t()`, детект языка по `navigator.language` + кэш в localStorage.

## Деплой

GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), кастомный домен через `public/CNAME`.
