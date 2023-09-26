import { FaRegIdBadge } from 'react-icons/fa'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // colors: {
    //   goldYellow: '#c6ad46',
    //   grayCoquille: '#a9b3b2',
    //   grayPerle: '#959794',
    //   greenCoquille: '#5d6e65',
    //   blackCoquille: '#272823',
    // }
  },
  plugins: [],
}
export default config
