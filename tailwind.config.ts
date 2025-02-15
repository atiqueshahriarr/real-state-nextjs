import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                poppins: ['var(--font-poppins)'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#FF5A3C',
                secondary: '#F3F3F3',
            },
        },
    },
    plugins: [daisyui],
} satisfies Config
