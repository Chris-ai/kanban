import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Kanban',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}> 
        <Navbar />
        {children}
      </body>
    </html>
  )
}
