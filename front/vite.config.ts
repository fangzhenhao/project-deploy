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
                '/project-deploy': {
                    target: env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },

        // base: process.env.NODE_ENV === 'production' ? '/project-deploy/' : '/',
        base: '/project-deploy/',

        build: {
            outDir: 'dist',
            base: '/project-deploy/'
        },

        define: {
            'process.env': env,
        },
    }
})
