import "./globals.css"
import { Inter, Ubuntu_Mono } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className="bg-blueberry-900">
     
        {children}
  
      </body>
    </html>
  )
}