import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
     plugins: [tailwindcss(), sveltekit()] ,
     server: {
        host: true, // これを入れないと、Windowsのブラウザから localhost:5173 で見られません
        watch: {
        usePolling: true, // Dドライブ（Windows領域）でファイル変更が検知されない場合に有効にする
        },
  },
});

