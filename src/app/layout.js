import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '700'] // Remplacez ou ajoutez les poids que vous voulez utiliser
})

export const metadata = {
  title: 'Revamb services',
  description: 'Revamb digital services  offred by mouatassim saad and developed by abdelmoughith el aoumari ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}
