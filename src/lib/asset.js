// Resolve a file from /public against Vite's base URL, so the site works both
// at the domain root and under a sub-path (e.g. GitHub Pages: /lynda.dev/).
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
