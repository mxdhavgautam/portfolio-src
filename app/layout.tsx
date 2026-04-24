import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SplashScreen } from '@/components/shared/splash-screen'
import { ThemeSync } from '@/components/shared/theme-sync'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { DataValues } from '@/data/data-values'

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

const socialPreviewUrl =
  'https://www.mxdhavgautam.com/assets/images/xpreview-20260424.jpg'
const metadataTitle =
  `${DataValues.appName} | ${DataValues.headerTitle}`
const metadataDescription = DataValues.appDescription

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mxdhavgautam.com'),
  title: metadataTitle,
  description: metadataDescription,
  keywords: [
    'Madhav Gautam',
    'mxdhavgautam',
    'Madhav Gautam portfolio',
    'A*STAR',
    'Quantum Innovation Centre',
    'research engineer',
    'R&D engineer',
    'ML engineer',
    'full-stack developer',
    'scientific ML',
    'AWS data pipelines',
    'GNOME project',
    'GenAI',
    'Next.js',
    'TypeScript',
    'React',
    'Python',
    'Delhi',
    'Gurgaon',
    'remote',
    'machine learning',
    'AI engineer',
    'software engineer',
    'data engineer',
    'portfolio',
    'projects',
  ],
  authors: [{ name: DataValues.appDeveloper }],
  creator: DataValues.appDeveloper,
  openGraph: {
    type: 'website',
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://www.mxdhavgautam.com/',
    siteName: DataValues.appName,
    images: [
      {
        url: socialPreviewUrl,
        width: 2400,
        height: 1256,
        alt: 'Madhav Gautam portfolio preview',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: metadataDescription,
    site: '@mxdhavgautam',
    creator: '@mxdhavgautam',
    images: [
      {
        url: socialPreviewUrl,
        width: 2400,
        height: 1256,
        alt: 'Madhav Gautam portfolio preview',
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
    title: DataValues.appName,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeScript = `
    (() => {
      const root = document.documentElement;
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-poppins splash-active">
        <SplashScreen />
        <ThemeSync />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
