/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Garanta que o Tailwind analise esses arquivos
    './components/**/*.{js,ts,jsx,tsx}', // Se você tiver uma pasta components, adicione-a também
  ],
  theme: {
    extend: {
      colors: {
        cerise: '#cb4667',
        blackbean: '#320B15',
        rosepompaduor: '#E9859D',
      },
    },
  },
  plugins: [],
}