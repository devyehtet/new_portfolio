import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ye Htet Aung - Digital Marketing Manager",
  description:
    "Digital Marketing Expert with extensive experience in crafting and executing data-driven strategies. Specialized in campaign optimization, performance marketing, and delivering measurable results.",
  keywords: "digital marketing, media planning, media buying, SEO, PPC, social media marketing, Chiang Mai",
  authors: [{ name: "Ye Htet Aung" }],
  openGraph: {
    title: "Ye Htet Aung - Digital Marketing Manager",
    description: "Digital Marketing Expert specializing in campaign optimization and performance marketing",
    url: "https://yehtet.com",
    siteName: "Ye Htet Aung Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
