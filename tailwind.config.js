module.exports = {
  content: [
    './templates/**/*.html',
    './basic_django/utils.py',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
