import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Connect, type Plugin } from 'vite'

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url))

/**
 * Serves blog/index.html for every post URL (/blog/<slug>) in dev and preview.
 * vercel.json does the same in production.
 */
function blogRoutes(): Plugin {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    if (req.url && /^\/blog\/[^/.?]+\/?(\?.*)?$/.test(req.url)) {
      req.url = '/blog/index.html'
    }
    next()
  }
  return {
    name: 'blog-routes',
    configureServer: (server) => void server.middlewares.use(rewrite),
    configurePreviewServer: (server) => void server.middlewares.use(rewrite),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), blogRoutes()],
  build: {
    // Each page is its own HTML entry, so /blog/ works on any static host.
    rolldownOptions: {
      input: {
        main: page('index.html'),
        blog: page('blog/index.html'),
      },
    },
  },
})
