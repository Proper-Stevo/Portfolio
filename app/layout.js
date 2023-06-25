import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steven B. Page',
  description: 'your next hire',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
