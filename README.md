# Vue 3 + Typescript + Vite

Vite + TypeScript + Eslint + Stylelint Start Template

```
{
    ...
    "scripts": {
        "dev": "vite",
        "build": "vue-tsc --noEmit && vite build",
        "preview": "vite preview",
        "lint:eslint": "eslint \"src/**/*.{vue,js,ts,tsx}\" --fix",
        "lint:stylelint": "stylelint --fix \"**/*.{vue,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
        "prepare": "husky install"
    }
}
```

```
pnpm dev
pnpm build
pnpm lint:eslint
pnpm lint:stylelint
```