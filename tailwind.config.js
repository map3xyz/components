module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './node_modules/@supabase/ui/dist/esm/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      spacing: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
      },
    },
  },
};
