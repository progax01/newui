import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Security by design, not by afterthought</h1>
      <p className="lead mt-3">We embed security into architecture and delivery. From secure SDLC to incident response, we reduce risk without blocking the roadmap.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Threat modeling & security architecture</li><li>• SAST/DAST/IAST integration</li><li>• Cloud security posture management</li><li>• Penetration testing & remediation</li><li>• Incident response playbooks & tabletop exercises</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">OWASP ASVS • CIS Benchmarks • NIST CSF • ISO 27001 alignment</p>
          
          <div className='small mt-6'><b>Proof:</b> Zero critical findings post‑audit for a healthcare client.</div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Schedule a security review</Link>
      </div>
    </Section>
  </div>
}
