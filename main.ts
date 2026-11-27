// DealSleuth — hand-in program for the make.fun Black Friday deal finder
// bounty (Node 22, standard library only). The entry is plain static files:
// app/ holds the site (index.html, style.css and the deal data plus the
// modules that render it), screenshots/ holds renders of the site running.
// This program copies both into the output directory and writes
// dossier.json with the kit's vendored library, exactly as the scorer
// rebuilds it. Leave vendor/makefun-frontend.ts unchanged.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly, before writing anything, when the entry is incomplete.
if (!existsSync(join(here, "app", "index.html"))) {
  throw new Error("app/index.html is missing — the site is not ready to hand in");
}
if (!existsSync(join(here, "screenshots"))) {
  throw new Error("screenshots/ is missing — take the site's screenshots first");
}

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// The scorer's caps, as the kit's reference gate states them: at most 4
// screenshots of 256 KiB each, app/ within 993 files and 16 MiB, and the
// dossier text capped at 160 KiB.
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
