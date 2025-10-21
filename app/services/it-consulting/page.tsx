import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Pragmatic technology leadership</h1>
      <p className="lead mt-3">Independent advice on architecture, delivery, org design, and vendor selection. We create clear roadmaps and unlock throughput.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Architecture & codebase audits</li><li>• Roadmaps and ROI models</li><li>• Build vs buy guidance</li><li>• Interim CTO/VP Eng support</li><li>• Team coaching & process tuning</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">Tailored to your stack</p>
          
          
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
      </div>
    </Section>
  </div>
}
