# NEXT14 Boiler Plate

NEXT14 Boiler Plate

- [Start App](#install) – 시작 스크립트
- [StoryBook](#creating-an-app) – 스토리북 스크립트

## 인스톨

```sh
npm install
```

## 스크립트

```sh
// fornt start
npm run dev
// front start & mock api server start
npm run dev:mock
// story book
npm run stroybook
```

## 아토믹 디자인 패턴

```
my-app
├── README.md
├── package.json
├── tsconfig.json
├── next.config.js
├── .prettierrc.json
├── .prettierignore
├── .eslintrc.json
├── .eslintignore
├── .gitignore
├── .env
├── node_modules
├── public
│   ├── font
│   └── mockServiceWorker.js
└── src
    ├── app
    │   ├── (router group)
    │       └── page.tsx
    │   ├── layout.tsx
    │   └── client.tsx
    ├── aseets
    │   └── scss
    ├── components
    │   ├── atoms
    │   │   └── componentName
    │   │       ├── index.tsx
    │   │       ├── componentName.styles.ts <- emotion/styled
    │   │       └── componentName.types.ts
    │   ├── molecules
    │   │   └── componentName
    │   │       ├── index.tsx
    │   │       ├── componentName.module.scss <- sass module
    │   │       └── componentName.types.ts
    │   ├── organisms
    │   │   └── componentName
    │   │       ├── index.tsx
    │   │       ├── componentName.module.scss <- sass module
    │   │       └── componentName.types.ts
    │   └── templates
    │   │   └── componentName
    │   │       ├── index.tsx
    │   │       ├── componentName.module.scss <- sass module
    │   │       └── componentName.types.ts
    ├── hooks
    ├── mock
    │   ├── data
    │   ├── browsers.ts
    │   ├── handlers.ts
    │   └── http.ts
    ├── redux
    │   ├── slice
    │   ├── reduxProvider.tsx
    │   └── store.ts
    ├── stories
    └── types
```
