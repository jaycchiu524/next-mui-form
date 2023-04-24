import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import { ThemeProvider, createTheme, ScopedCssBaseline } from '@mui/material'

import 'react-phone-number-input/style.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  return (
    // <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <NextSeo
        title="Jay Chiu"
        description="Know more about Jay Chiu, ."
        canonical="https://jaychiu.me"
        openGraph={{
          url: 'jaychiu.me',
          title: 'Jay Chiu - Developer',
          description: "Hello World, I'm Jay, You're gonna know more about me.",
          type: 'profile',
          images: [
            {
              url: 'https://jaychiu.me/og-jaychiu-1.jpg',
              width: 1200,
              height: 630,
              alt: 'Jay Chiu',
              type: 'image/jpeg',
            },
            {
              url: 'https://jaychiu.me/og-jaychiu-2.png',
              width: 1200,
              height: 630,
              alt: 'Jay Chiu',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Jay Chiu',
        }}
      />
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
