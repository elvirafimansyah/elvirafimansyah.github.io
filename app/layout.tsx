import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar/page";
import Footer from '@/components/footer';
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: `Elvira Firmansyah | Portfolio`,
  description: 'Upgrade skill & kompetensi kamu  dalam mendapatkan pekerjaan, menaikkan income, dan memulai usaha secara profesional dengan materi pembelajaran berkualitas dengan harga yang terjangkau.',
  icons: {
    icon: [
      'favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ],
  },
  manifest: './site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <Script src="https://kit.fontawesome.com/95ced1a725.js" crossOrigin="anonymous"></Script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

