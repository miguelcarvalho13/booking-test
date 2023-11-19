## Install

- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

After that, run `yarn` to install `package.json` dependencies and `yarn dev` to start the development server.

```bash
yarn && yarn dev
```

The app should be running at [http://localhost:5173](http://localhost:5173).

<details>
   <summary>Technical decisions</summary>

   1. Which tools were used to build this app?

      This is the stack:
      - Bundler: Vite
      - Test: Vitest + Jest + React Testing Library
      - Data management: React Query (TanStack Query)
      - Server mock: MSW

</details>

