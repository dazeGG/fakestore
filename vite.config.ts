import { defineConfig } from 'vite'

import path from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue({
			script: {
				defineModel: true
			}
		}),
		tailwindcss()
	],
	resolve: {
		alias: { '@': path.resolve(__dirname, 'src') }
	}
})
