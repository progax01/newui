import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Mobile apps with reliability built‑in</h1>
      <p className="lead mt-3">Native or cross‑platform apps with offline‑first, telemetry, and CI/CD so features reach users safely and quickly.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• iOS/Android native & React Native/Flutter</li><li>• API design & edge caching</li><li>• Release automation and QA</li><li>• Crash analytics & user feedback loops</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">Tailored to your stack</p>
          
          
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Start your app project</Link>
      </div>
    </Section>
  </div>
}
