import { sentryVitePlugin } from "@sentry/vite-plugin";
/* eslint-disable no-undef */
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), sentryVitePlugin({
        org: "dmitriy-36",
        project: "javascript-react"
    })],

    base: './',

    resolve: {
        alias: {
            '@/*': path.resolve(__dirname, './src/*'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@layout': path.resolve(__dirname, './src/components/layout'),
            '@ui': path.resolve(__dirname, './src/components/ui'),
            '@screens': path.resolve(__dirname, './src/components//screens'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@providers': path.resolve(__dirname, './src/providers'),
            '@constants': path.resolve(__dirname, './src/constants')
        }
    },

    build: {
        sourcemap: true
    }
})