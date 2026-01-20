import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { SplashScreen } from '@/components/shared/splash-screen'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Madhav Gautam | Developer Portfolio',
  description:
    "Hey, I'm Madhav. Welcome to my Developer Portfolio, where you can explore my skills, education, experience, and more, as you scroll through.",
  keywords: [
    'Madhav Gautam',
    'dev',
    'madhav',
    'maddy',
    'mxdhav',
    'gautam',
    'iOS',
    'Mac',
    'Android',
    'mxdhavgautam',
    'madhav gautam',
    'mdv',
    'cr3ate.ai',
    'gaussian splat',
    'intern',
    'HCLTech',
    'WESEE',
    'DRDO',
    'Delhi',
    'Lucknow',
    'United States',
    'internship',
    'machine learning',
    'data analytics',
    'data analysis',
    'Flutter developer',
    'portfolio',
    'VIT Chennai',
    'projects',
    'experience',
    'contact',
    'software developer',
  ],
  authors: [{ name: 'Madhav Gautam' }],
  creator: 'Madhav Gautam',
  openGraph: {
    type: 'website',
    title: 'Madhav Gautam | Developer Portfolio',
    description:
      "Hey, I'm Madhav. Welcome to my Developer Portfolio, where you can explore my skills, education, experience, and more, as you scroll through.",
    url: 'https://www.mxdhavgautam.com/',
    siteName: 'Madhav Gautam',
    images: [
      {
        url: 'https://www.mxdhavgautam.com/icons/xpreview.png',
        width: 2400,
        height: 1256,
        alt: 'Madhav Gautam Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhav Gautam | Developer Portfolio',
    description:
      "Hey, I'm Madhav. Welcome to my Developer Portfolio, where you can explore my skills, education, experience, and more, as you scroll through.",
    site: '@mxdhavgautam',
    creator: '@mxdhavgautam',
    images: [
      {
        url: 'https://www.mxdhavgautam.com/icons/xpreview.png',
        width: 2400,
        height: 1256,
        alt: 'Madhav Gautam Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'CwykqR849Gv7K2ES7eHw_A6mprq-SahLeONsmUUqf9c',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.mxdhavgautam.com/',
    languages: {
      'en': 'https://www.mxdhavgautam.com/',
      'x-default': 'https://www.mxdhavgautam.com/',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Madhav Gautam',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className="font-poppins">
        <SplashScreen />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

