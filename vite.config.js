import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    root: 'src',
    build: {
        // Relative to the root
        outDir: '../dist',
    },
    publicDir: '../public',
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        createHtmlPlugin({
            inject: {
                data: {
                    title: env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
                },
            },
        }),
        react({
            // Use React plugin in all *.jsx and *.tsx files
            include: '**/*.{js,jsx,tsx}',
        }),
    ],
});