import { Inter } from 'next/font/google'
import './globals.css'
import { SpaceFont } from './font';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "UdehPraise | Home",
  metadataBase: new URL("https://digicask.finance"),
  description: "We are Making Whisky Investment Accessible to All",
  keyword: [
      "Software Engineer",
      "Web Developer",
      "Hiring",
      "Programmer",
  ],
  icons: {
      icon: [
          { url: "/images/favicon/favicon-16x16.png", size: "16x16" },
          { url: "/images/favicon/favicon-32x32.png", size: "32x32" },
      ],
      shortcut: "/images/favicon/favicon-32x32.png",
      apple: "/images/favicon/apple-touch-icon.png",
      andriod: [
          {
              url: "/images/favicon/android-chrome-192x192.png",
              size: "192x192",
          },
          {
              url: "/images/favicon/android-chrome-512x512.png",
              size: "512x512",
          },
      ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${SpaceFont.variable} ${SpaceFont.className} `}
        suppressHydrationWarning={true}
        >{children}</body>
    </html>
  )
}
