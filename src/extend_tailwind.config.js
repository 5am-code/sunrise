// Please extend your existing tailwind.config.js by the configuration tweaks below.

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      // Additional scale class
      scale: {
        '101': '1.01',
      },

      // Rotation
      rotate: {
        'full': '360deg'
      },

      // custom font sizes
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },

      // add a centered shadow property
      boxShadow: {
        centered: '0 0px 5px -3px rgba(0, 62, 129, 0.1), 0 0px 6px -2px rgba(0, 62, 129, 0.2)'
      },

      // animation helpers
      translate: {
        '1/4': '25%',
      },

      maxHeight: {
        '0': '0'
      },

      // theme fonts
      fontFamily: {
        'display': ["'Source Sans Pro'"], // headlines
        'sans': ["'Open Sans'"], // standard text
        'oblique': ["'Source Serif Pro'"], // oblique, fancy text
      },

      // theme colors
      colors: {
        'amber': {
          '50': '#fcfaf9',
          '100': '#fbf5f4',
          '200': '#f6e2e5',
          '300': '#f1c5ce',
          '400': '#ed93a4',
          '500': '#e86676',
          '600': '#cf4350',
          '700': '#9c3341',
          '800': '#6e2734',
          '900': '#52202b',
        },
        'azure': {
          50: '#F8FBFC',
          100: '#F1F8F9',
          200: '#D9EDF2',
          300: '#7FC0D2',
          400: '#2291BC',
          500: '#0069A1',
          600: '#005281',
          700: '#003C5B',
          800: '#002E44',
          900: '#002231',
        },
        'fog': {
          50: '#F8FAFC',
          100: '#F0F7FA',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64738C',
          600: '#45546C',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      zIndex: {
        '-1': '-1',
      }
    },


  },
  plugins: [],
  variants: {
    extends: {
      backgroundColor: ['hover', 'group-hover', 'even'],
      scale: ['hover', 'group-hover'],
      display: ['hover', 'group-hover', 'responsive'],
      borderColor: ['hover', 'group-hover'],
    }
  },
}
