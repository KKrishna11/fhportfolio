import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Poppins } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})



export const metadata: Metadata = {
  title: "Florian Hurel | Master Stylist & Entrepreneur",
  description:
    "Florian Hurel is a renowned hair stylist and makeup artist with over 2 decades of experience in the beauty industry, working with top Bollywood celebrities and international brands.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${cormorantGaramond.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
