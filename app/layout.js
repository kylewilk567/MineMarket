import '@styles/globals.css'
import Provider from '@components/Provider';
import Nav from '@components/Nav';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${process.env.COMPANY_NAME}`,
  description: 'Quality Minecraft Webstores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Provider>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}
