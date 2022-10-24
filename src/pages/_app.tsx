import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'
import { ThemeProvider, createTheme, ScopedCssBaseline } from '@mui/material'

import 'react-phone-number-input/style.css'

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
        title="Kreatipedia"
        description="Know more about Kreatipedia, ."
        canonical="https://kreatipedia.com/"
        openGraph={{
          url: 'kreatipedia.com',
          title: 'Kreatipedia - Cost, Cosistency, and Commitment',
          description:
            'With over years of problem solving experience, Kreatipedia Inc. stands tall in the international markets with physical presence in Canada and USA and online presence in North America, Europe, Asia and Australia.',
          type: 'profile',
          images: [
            {
              url: 'https://kreatipedia.com/img/Kreatipedia%20Logo%20Icon%20-%2060X60.png',
              width: 1200,
              height: 630,
              alt: 'Kreatipedia',
              type: 'image/jpeg',
            },
            {
              url: 'https://kreatipedia.com/img/Kreatipedia%20Logo%20Icon%20-%2060X60.png',
              width: 1200,
              height: 630,
              alt: 'Kreatipedia',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Kreatipedia',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
