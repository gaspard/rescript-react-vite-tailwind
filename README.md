# App creation

This app was created with:

```sh
$ npm create rescript-app@latest
┌  create-rescript-app 1.7.1
│
◇  Welcome to ReScript! ─────────────────────────────────╮
│                                                        │
│  Fast, Simple, Fully Typed JavaScript from the Future  │
│  https://rescript-lang.org                             │
│                                                        │
├────────────────────────────────────────────────────────╯
│
◇  New Project ───────────────────────────────────────────╮
│                                                         │
│  Create a new ReScript 11 project with modern defaults  │
│  ("Core" standard library, JSX v4)                      │
│                                                         │
├─────────────────────────────────────────────────────────╯
│
◇  What is the name of your new ReScript project?
│  rescript-react-vite-tailwind
│
◇  Select a template
│  Vite
│
◇  Versions loaded.
│
◇  ReScript version?
│  11.1.1
│
◇  ReScript Core version?
│  1.5.0
│
◇  Project created.
│
└  Happy hacking!
```

Changed the scripts to run all `*:dev` scripts in parallel:

```sh
$ npm i --save-dev npm-run-all
```

With this change to `package.json`:

```json
  "scripts": {
    "dev": "run-p *:dev",
    "res:build": "rescript",
    "res:clean": "rescript clean",
    "res:dev": "rescript -w",
    "vite:dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
```

And we will be using `.mjs` extension so these changes need to be done (this gives an opportunity to understand how all this works):

In `rescript.json` we tell ReScript about compilation output:

```json
  "suffix": ".mjs",
```

In `tailwind.config.cjs` we tell Tailwind CSS about the files to scan for classes:

```js
  content: ["./index.html", "./src/**/*.mjs"],
```

And finally, we need to tell Vite about our application entry:

```html
<script type="module" src="/src/Main.mjs"></script>
```
