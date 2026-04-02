import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Adicionamos as integrações oficiais do Astro para a nossa stack
    integrations: [
        react(),
        tailwind({
            // Definimos como false para gerenciarmos nossos próprios estilos globais (global.css)
            // garantindo compatibilidade com o Shadcn UI
            applyBaseStyles: false,
        }),
    ],
});