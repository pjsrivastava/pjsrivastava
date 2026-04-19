import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#222222',
        paper: '#ffffff',
        muted: '#6b6b6b',
        accent: '#1a6fc4',
        'accent-hover': '#0d4f94',
        rule: '#e5e5e5',
      },
      fontFamily: {
        sans: ['"Proxima Nova"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Adobe Garamond Pro"', '"EB Garamond"', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '44rem',
        page: '72rem',
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
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: '1.7',
            h1: { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400', letterSpacing: '-0.01em' },
            h2: { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400', letterSpacing: '-0.005em' },
            h3: { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400' },
            a: { textDecoration: 'none', borderBottom: '1px solid currentColor' },
            'a:hover': { color: theme('colors.accent-hover') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
