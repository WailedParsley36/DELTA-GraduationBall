import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import image from '../images/photos/image-1.jpg'
import icon from './favicon.ico'

import '@/styles/tailwind.css'

export const metadata = {
  title: 'DELTA - Maturitní ples 2025 | Elegantní ples v domu kultury Dukla',
  description:
    'Přijďte oslavit konec studia na DELTA Maturitním plese 22.2.2025 v luxusním prostředí domu kultury Dukla. Tento prestižní ples nabídne slavnostní šerpování, hudbu, tanec a bohatou tombolu. Vytvořte nezapomenutelné vzpomínky s rodinou a přáteli. Rezervujte si vstupenky na nezapomenutelný večer plný elegance a zábavy. DELTA Maturitní ples je ideální příležitost pro všechny, kteří chtějí stylově zakončit maturitní rok.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta
          name="title"
          content="DELTA - Maturitní ples 22.2.2025 | Elegantní ples v domu kultury Dukla"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Czech" />
        <meta name="author" content="Studenti ročníku 4.A z DELTY" />

        <meta
          property="og:title"
          content="DELTA - Maturitní ples 22.2.2025 | Elegantní ples v domu kultury Dukla"
        />
        <meta
          property="og:description"
          content="Přijďte oslavit konec studia na DELTA Maturitním plese 22.2.2025 v luxusním prostředí domu kultury Dukla. Tento prestižní ples nabídne slavnostní šerpování, hudbu, tanec a bohatou tombolu. Vytvořte nezapomenutelné vzpomínky s rodinou a přáteli. Rezervujte si vstupenky na nezapomenutelný večer plný elegance a zábavy. DELTA Maturitní ples je ideální příležitost pro všechny, kteří chtějí stylově zakončit maturitní rok."
        />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="maturita.deltaskola.cz" />
        <meta property="og:type" content="website" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
