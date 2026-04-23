/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#111827',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'text-tertiary': '#D1D5DB',
        'accent-green': '#257718',
        'border-dark': '#3F4A5C',
      },
      fontFamily: {
        'logo': ['Style Script', 'cursive'],
        'body': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'logo': '27px',
        'hero-title': '68px',
        'blog-heading': '41px',
        'blog-card-title': '23px',
        'blog-card-excerpt': '18px',
      },
      fontWeight: {
        'logo': 400,
        'hero': 800,
        'blog-card-excerpt': 500,
      },
      lineHeight: {
        'blog-content': '32px',
      },
    },
  },
  plugins: [],
}

