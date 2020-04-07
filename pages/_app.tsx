import { AppProps } from 'next/app';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';
import * as Wallop from '@peduarte/wallop-system';
import { prismTheme } from '../prismTheme';
import { useAnalytics } from '../utils/analytics';

const theme = Wallop.theme;

// Create global CSS for syntax highlighting
export const GlobalStyles = createGlobalStyle(
  {
    body: {
      backgroundColor: theme.colors.black,
      color: theme.colors.white,
      fontFamily: theme.fonts.sans,
      margin: 0,
    },

    '&::selection': {
      backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
      color: 'black',
    },
  },
  prismTheme
);

// const { RadixProvider, Box } = Radix;

function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  return (
    <Wallop.WallopProvider>
      <MDXProvider
        components={{
          ...Wallop,
          h1: (props) => <Wallop.Text size={7} mb={7} sx={{ fontWeight: 500 }} {...props} as="h1" />,
          h2: (props) => <Wallop.Text size={4} mt={6} mb={4} mx="auto" sx={{ fontWeight: 600 }} {...props} as="h2" />,
          h3: (props) => <Wallop.Text size={3} mt={6} mb={3} mx="auto" sx={{ fontWeight: 600 }} {...props} as="h3" />,
          h4: (props) => <Wallop.Text size={3} mt={5} mb={3} mx="auto" sx={{ fontWeight: 600 }} {...props} as="h4" />,
          p: (props) => <Wallop.Text mb={4} {...props} size={3} as="p" />,
          a: (props) => <Wallop.Link {...props} />,
          hr: (props) => <Wallop.Divider my={5} mx="auto" sx={{ width: 3, bg: 'gray' }} {...props} />,
          inlineCode: (props) => <Wallop.Code {...props} />,
          ul: (props) => <Wallop.Box mb={4} {...props} as="ul" />,
          ol: (props) => <Wallop.Box mb={4} {...props} as="ol" />,
          li: (props) => (
            <li>
              <Wallop.Text {...props} size={3} />
            </li>
          ),
          strong: (props) => <Wallop.Text {...props} sx={{ ...props.sx, fontWeight: 600 }} />,
          img: ({ ...props }) => (
            <Wallop.Box as="span" mx={[-3, -5]} my={4} sx={{ display: 'inline-block' }}>
              <img style={{ maxWidth: '100%', verticalAlign: 'middle' }} {...props} />
            </Wallop.Box>
          ),
          iframe: ({ ...props }) => (
            <Wallop.Box mb={4}>
              <iframe {...props} />
            </Wallop.Box>
          ),
          blockquote: (props) => (
            <Wallop.Box
              my={4}
              pl={4}
              sx={{ fontSize: 0, borderLeft: (theme) => `2px solid ${theme.colors.gray}`, color: 'gray' }}
              {...props}
            />
          ),
        }}
      >
        <Head>
          <title>Modulz</title>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <GlobalStyles />

        <Component {...pageProps} />
      </MDXProvider>
    </Wallop.WallopProvider>
  );
}

export default App;
