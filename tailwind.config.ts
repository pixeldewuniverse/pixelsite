import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        pixelBg: '#0b0b0f',
        neonBlue: '#32d5ff',
        neonPurple: '#9f7bff',
        neonGold: '#f5c85f'
      },
      boxShadow: {
        neon: '0 0 20px rgba(50, 213, 255, 0.4)',
        glass: '0 10px 30px rgba(0,0,0,0.3)'
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(159,123,255,0.3) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
