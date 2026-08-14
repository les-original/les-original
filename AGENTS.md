# AGENTS.md

## Cursor Cloud specific instructions

Eleventy (11ty) static site. Content in `src/`, output in `build/`.

- Dev: `npm start` → http://localhost:8080
- Build: `npm run build`
- No lint or test scripts in this repo.
- Node 22.x required (`package.json` engines). Image shortcodes fall back to raw `<img>` if remote fetch fails, so builds still succeed offline.
