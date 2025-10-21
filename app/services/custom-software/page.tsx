import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Custom software that ships—and sticks</h1>
      <p className="lead mt-3">We design and build maintainable systems that scale. From discovery to release, we balance speed with engineering discipline so your product stays reliable, secure, and easy to evolve.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Product discovery & UX flows</li><li>• Domain‑driven design & clean architecture</li><li>• APIs, microservices, event‑driven systems</li><li>• Automated testing, CI/CD, observability</li><li>• Documentation & handover enablement</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">.NET, Java, Node.js, Python, Go, React, Vue, Postgres, Redis, Kafka, Docker, Kubernetes</p>
          <div className='h3 mt-6'>Engagement</div><p className='small mt-2'>Fixed‑scope MVP • Agile squads • Staff augmentation</p>
          <div className='small mt-6'><b>Proof:</b> 12‑week MVP for a SaaS raised Series A with confidence in the codebase.</div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Get a free quote</Link>
      </div>
    </Section>
  </div>
}
