import '@/styles/globals.css'; // or '../styles/globals.css'
import React from 'react';
import 'tailwindcss/tailwind.css'
import { Analytics } from "@vercel/analytics/next"

export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
  )
}
