import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'NexonAce — Premium Web Development for Global Clients' },
      { name: 'description', content: 'We build fast, modern, conversion-focused websites for global businesses, startups, and schools.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl font-black text-[var(--brand-blue)] mb-4">404</div>
        <h1 className="display-title text-3xl font-bold text-[var(--sea-ink)] mb-4">Page not found</h1>
        <a href="/" className="text-[var(--brand-orange)] font-bold hover:underline">← Back to home</a>
      </div>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] bg-white text-[var(--sea-ink)] selection:bg-[var(--brand-orange)]/20">
        {/* Sticky Header — always present */}
        <Header />

        {/* Page content */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Footer — always present */}
        <Footer />

        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
        />
        <Scripts />
      </body>
    </html>
  )
}
