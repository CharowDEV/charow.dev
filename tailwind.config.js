/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '1rem',
            center: true
        },
        extend: {
            colors: {
                primary: {
                    light: '#084367',
                    DEFAULT: '#1a2e3b'
                },
                secondary: {
                    light: '#cae9ff',
                    DEFAULT: '#4bc9ff',
                    dark: '#0faef1'
                },
                error: {
                    light: '#e57373',
                    DEFAULT: '#f44336',
                    dark: '#d32f2f'

                },
                warning: {
                    light: '#ffb74d',
                    DEFAULT: '#ffa726',
                    dark: '#f57c00'
                },
                info: {
                    light: '#4fc3f7',
                    DEFAULT: '#29b6f6',
                    dark: '#0288d1'

                },
                success: {
                    light: '#81c784',
                    DEFAULT: '#66bb6a',
                    dark: '#388e3c'

                }
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))'
            },

            boxShadow: {
                softer: '0 2px 10px -3px rgba(0,0,0, 0.1)',
                soft: '0 2px 10px -3px rgba(0,0,0, 0.2)',
            },

            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }]
            },
            fontFamily: {
                headings: ['Montserrat', 'sans-serif'],
                base: ['Inter', 'sans-serif']
            },

            gridTemplateColumns: (theme) => {
                const spacing = theme('spacing');

                return Object.keys(spacing).reduce((accumulator, spacingKey) => {
                    return {
                        ...accumulator,
                        [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`
                    };
                }, {});
            }
        }
    },
    darkMode: 'class',
    plugins: [require('@headlessui/tailwindcss')]
};
