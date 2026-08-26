import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://scientiaessencial.com.br',
  output: 'server', // ou 'hybrid' / 'static' dependendo do seu projeto
  adapter: cloudflare(),
  integrations: [sitemap()],
});