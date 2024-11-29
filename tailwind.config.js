/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Garanta que o Tailwind analise esses arquivos
    './components/**/*.{js,ts,jsx,tsx}', // Se você tiver uma pasta components, adicione-a também
  ],
  theme: {
    extend: {
      colors: {
        cerise: '#db2777', // Cor personalizada
      },
    },
  },
  plugins: [],
}