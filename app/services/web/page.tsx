import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Websites that load fast and convert</h1>
      <p className="lead mt-3">Enterprise‑grade websites and portals with accessibility, SEO, analytics, and a headless CMS—so marketing can move fast.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• UX, design systems, and component libraries</li><li>• Jamstack/headless (Next.js, Nuxt, Astro)</li><li>• CMS (Contentful, Sanity, Strapi)</li><li>• Technical SEO & performance budgets</li><li>• Analytics & experimentation setup</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">Tailored to your stack</p>
          
          
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Get a free quote</Link>
      </div>
    </Section>
  </div>
}
