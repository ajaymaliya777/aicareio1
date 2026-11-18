import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

try {
  const { build } = await import("vite");
  await build({ configFile: path.join(root, "vite.config.js"), root });
  console.log("Vite production build completed.");
} catch (error) {
  if (error?.code !== "ERR_MODULE_NOT_FOUND" || !String(error.message).includes("vite")) throw error;

  // Offline-safe static fallback: the output uses native ES modules and CSS,
  // so it remains deployable even when dependencies cannot be installed.
  await rm(dist, { recursive: true, force: true });
  await mkdir(path.join(dist, "assets"), { recursive: true });
  await cp(path.join(root, "public"), dist, { recursive: true });
  await cp(path.join(root, "src"), path.join(dist, "src"), { recursive: true });
  for (const page of ["services.html", "company.html", "case-studies.html", "contact.html"]) {
    await cp(path.join(root, page), path.join(dist, page));
  }

  const html = await readFile(path.join(root, "index.html"), "utf8");
  const main = (await readFile(path.join(root, "src/main.js"), "utf8"))
    .replace(/^import\s+["']\.\/style\.css["'];?\s*$/m, "");
  const config = await readFile(path.join(root, "src/config.js"), "utf8");
  const css = await readFile(path.join(root, "src/style.css"), "utf8");
  const outputHtml = html.replace(
    '<script type="module" src="/src/main.js"></script>',
    '<link rel="stylesheet" href="/assets/style.css" />\n  <script type="module" src="/assets/main.js"></script>',
  );

  await Promise.all([
    writeFile(path.join(dist, "index.html"), outputHtml),
    writeFile(path.join(dist, "assets/main.js"), main),
    writeFile(path.join(dist, "assets/config.js"), config),
    writeFile(path.join(dist, "assets/style.css"), css),
  ]);
  console.warn("Vite is not installed; created an offline-safe static build. Run npm install to use Vite's optimized build.");
}
