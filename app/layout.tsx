import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solvionary | Where solutions meet vision',
  description: 'Custom software, cloud, cybersecurity, AI/ML & blockchain for global teams. Enterprise discipline, security by design. Book a consultation.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b sticky top-0 bg-white/90 backdrop-blur z-50">
            <div className="container flex items-center justify-between h-16">
              <a href="/" className="font-heading text-xl font-extrabold text-sapphire">Solvionary</a>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="/services" className="hover:text-sapphire">Services</a>
                <a href="/solutions" className="hover:text-sapphire">Solutions</a>
                <a href="/case-studies" className="hover:text-sapphire">Case Studies</a>
                <a href="/process" className="hover:text-sapphire">Process</a>
                <a href="/security" className="hover:text-sapphire">Security</a>
                <a href="/about" className="hover:text-sapphire">About</a>
                <a href="/blog" className="hover:text-sapphire">Blog</a>
              </nav>
              <div className="flex items-center gap-3">
                <a href="/contact" className="btn btn-primary">Book a consultation</a>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t mt-16">
            <div className="container py-12 grid gap-8 md:grid-cols-4">
              <div>
                <div className="font-heading text-xl font-extrabold text-sapphire">Solvionary</div>
                <p className="mt-2 small">Where solutions meet vision.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge">ISO 27001</span>
                  <span className="badge">SOC 2</span>
                  <span className="badge">GDPR-ready</span>
                </div>
              </div>
              <div>
                <div className="h3 text-base mb-3">Company</div>
                <ul className="space-y-2 small">
                  <li><a href="/about" className="hover:text-sapphire">About</a></li>
                  <li><a href="/case-studies" className="hover:text-sapphire">Case Studies</a></li>
                  <li><a href="/careers" className="hover:text-sapphire">Careers</a></li>
                  <li><a href="/blog" className="hover:text-sapphire">Blog</a></li>
                </ul>
              </div>
              <div>
                <div className="h3 text-base mb-3">Services</div>
                <ul className="space-y-2 small">
                  <li><a href="/services/custom-software" className="hover:text-sapphire">Custom Software</a></li>
                  <li><a href="/services/cloud-devops" className="hover:text-sapphire">Cloud & DevOps</a></li>
                  <li><a href="/services/cybersecurity" className="hover:text-sapphire">Cybersecurity</a></li>
                  <li><a href="/services/ai-ml" className="hover:text-sapphire">AI & ML</a></li>
                  <li><a href="/services/blockchain" className="hover:text-sapphire">Blockchain</a></li>
                  <li><a href="/services/web" className="hover:text-sapphire">Web Development</a></li>
                  <li><a href="/services/mobile" className="hover:text-sapphire">Mobile Development</a></li>
                </ul>
              </div>
              <div>
                <div className="h3 text-base mb-3">Contact</div>
                <p className="small">General: contact@solvionary.com</p>
                <p className="small">Sales: sales@solvionary.com</p>
                <a href="/contact" className="btn btn-outline mt-3">Get a free quote</a>
              </div>
            </div>
            <div className="border-t py-6 small text-center">© {new Date().getFullYear()} Solvionary. All rights reserved.</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
