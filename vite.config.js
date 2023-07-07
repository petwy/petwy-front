import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    define: {
      "typeof process !== 'undefined'": 'true',
    },
    plugins: [
      reactRefresh(),
      viteSvgr({
        root: './',
      }),
    ],
    server: {
      host: true,
      port: env.VITE_PORT,
    },
  }
})
