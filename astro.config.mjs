import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Integrações ativas: Apenas Tailwind. 
    // O React foi completamente removido para garantir Zero-JS no carregamento inicial.
    integrations: [
        tailwind({
            // Mantemos false para que o Tailwind não injete o reset padrão dele 
            // antes do nosso arquivo global.css autoral, mantendo o controle total da tipografia.
            applyBaseStyles: false,
        }),
    ],
});