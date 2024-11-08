/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {
        colors: {
          'Charcoal/50': 'rgba(185, 184, 184, 1)',
          'Charcoal/100': 'rgba(136, 136, 136, 1)',
          'Charcoal/200': 'rgba(90, 90, 90, 1)',
          'Charcoal/300':  'rgba(62,62,62,1)',
          'Charcoal/400': 'rgba(50, 50, 50, 1)',
          'Charcoal/500': 'rgba(39, 39, 39, 1)',
          'Charcoal/600': 'rgba(33, 33, 33, 1)',
          'Charcoal/700': 'rgba(29, 29, 29, 1)',
          'Charcoal/800': 'rgba(21, 21, 21, 1)',
          'Charcoal/900': 'rgba(17, 17, 17, 1)',
          'amber/400'   : 'rgba(251, 191, 36, 1)',
          'Gold/800'    : 'rgba(99, 84, 45, 1)',
          'red/200'     :  'rgba(254,202,202,1)',
          'red/400'     : 'rgba(248,113,113,1)',
          'red/500'     : 'rgba(239,68,68,1)',
          'red/600'     : 'rgba(220,38,38,1)',
          'red/900'     : 'rgba(127,29,29,1)',
          'white'       : 'rgba(255,255,255)',
        },
        screens: {
          '1024-1440': { 'min': '1024px', 'max': '1440px' },
          'below-1440': { 'max': '1439px' }
        },
      },
    },
    plugins: [],
  }
  
  