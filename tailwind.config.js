/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    theme: {
        extend: {
            screens: {
                'max-md': { max: '767.98px' },
                'max-sm': { max: '566.98px' }
            },
            colors: {
                blue: '#2997FF',
                gray: {
                    DEFAULT: '#86868b',
                    100: '#94928d',
                    200: '#afafaf',
                    300: '#42424570'
                },
                zinc: '#101010'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animated')
    ]
}
