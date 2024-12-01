import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({mode}) => {

    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [vue()],
        server: {
            open: true,
            host: true,
            proxy: {
                '/api': {
                    target: env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },

        build: {
            outDir: 'dist'
        },

        define: {
            'process.env': env,
        },
    }
})
