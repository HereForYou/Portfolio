import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Fox",
  description: "Solana Development Guru",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://devshinthant.vercel.app/",
    title: "Smart Fox",
    description:
      "Portfolio website developed with NextJS, TypeScript, ShadcnUI & GSAP.",
    siteName: "Portfolio Website",
    images: [
      {
        url: "https://i.ibb.co/m5bYtw6/responsive-showcase.png",
      },
    ],
  },
  authors: {
    name: "Smart Fox",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP", "ShadcnUI"],
  creator: "Smart Fox",
  icons: {
    icon: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
