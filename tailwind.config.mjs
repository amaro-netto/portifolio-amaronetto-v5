/** @type {import('tailwindcss').Config} */
export default {
    // Lemos todos os arquivos do Astro e possíveis scripts internos
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Paleta Boutique Corporativa
                primary: '#0D2439',     // Deep Navy - Autoridade e Destaque
                surface: '#D5D9DC',     // Light Gray - Bordas e divisores
                background: '#F4F5F7',  // Off-White - Fundo principal da página
                foreground: '#15181C',  // Charcoal - Texto principal (evita o contraste agressivo do preto puro)
                white: '#FFFFFF',       // Superfícies de cards e elementos sobrepostos
            },
            fontFamily: {
                // Serif para Títulos (Autoridade/Tradição)
                serif: ['"Playfair Display"', 'serif'],
                // Sans para Corpo de Texto (Legibilidade/Modernidade)
                sans: ['Lato', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    // Limitamos a largura máxima para manter a leitura agradável (estilo editorial/boutique)
                    '2xl': '1200px',
                },
            },
        },
    },
    // Removemos o tailwindcss-animate, pois as animações serão mais sutis (CSS puro)
    plugins: [],
}