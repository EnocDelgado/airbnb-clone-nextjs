import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
// import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToaterProvider from './api/providers/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ font.className }>
        {/* <ClientOnly></ClientOnly> */}
        <ToaterProvider />
        <RegisterModal />
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
