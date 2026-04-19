import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Refined minimal palette: warm-neutral paper, deep ink, a muted
        // editorial teal for accents.
        paper: '#fbfaf6',       // warm off-white page background
        paperMute: '#f1eee6',   // slightly darker warm neutral for section bands
        ink: '#1f1d1a',         // near-black with a hint of warmth
        inkMute: '#4a463f',     // softer secondary text
        muted: '#7a736a',       // tertiary / metadata
        rule: '#e3ded3',        // horizontal rules, borders
        accent: '#0f6e6e',      // muted editorial teal
        'accent-hover': '#094f4f',
        highlight: '#c9a84a',   // warm gold used sparingly (e.g. decorative)
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"EB Garamond"', '"Adobe Garamond Pro"', 'Georgia', 'Cambria', 'serif'],
      },
      fontSize: {
        // Refined type scale
        'display-lg': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 3vw + 1rem, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '42rem',
        page: '68rem',
        hero: '56rem',
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.muted'),
            '--tw-prose-hr': theme('colors.rule'),
            '--tw-prose-quotes': theme('colors.inkMute'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            fontFamily: theme('fontFamily.sans').join(', '),
            fontSize: '1.075rem',
            lineHeight: '1.75',
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '500',
              letterSpacing: '-0.015em',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '500',
              letterSpacing: '-0.01em',
              marginTop: '2.25em',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '500',
            },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.accent'),
              paddingBottom: '1px',
              transition: 'color 150ms ease, border-color 150ms ease',
            },
            'a:hover': {
              color: theme('colors.accent-hover'),
              borderColor: theme('colors.accent-hover'),
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '3px',
              fontWeight: '400',
              color: theme('colors.inkMute'),
            },
            hr: {
              borderColor: theme('colors.rule'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            'ul > li::marker': { color: theme('colors.muted') },
            'ol > li::marker': { color: theme('colors.muted') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
