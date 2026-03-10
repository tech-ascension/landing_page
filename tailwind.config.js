/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',
        secondary: '#3A5A80',
        foreground: '#F5F5F5',
        muted: {
          DEFAULT: '#111111',
          foreground: '#9CA3AF',
        },
        border: '#222222',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)',
        'card-hover': '0 14px 40px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
