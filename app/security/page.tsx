import Section from '@/components/Section'
export default function Page(){
  const practices = [
    "Secure SDLC, dependency governance, secrets management",
    "Encryption at rest/in transit, key rotation",
    "Zero‑trust networking, IAM baselines",
    "Backup, DR, and incident response drills",
    "Privacy by design and data minimization"
  ]
  const frameworks = ["ISO 27001","SOC 2","NIST CSF","OWASP ASVS","CIS Benchmarks"]
  return <div>
    <Section>
      <h1 className="h1">Security and privacy that scale with you</h1>
      <p className="lead mt-3">We design for least privilege, defense‑in‑depth, and auditable change—meeting your obligations without slowing delivery.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we practice</div>
          <ul className="mt-3 space-y-2 small">{practices.map(p=> <li key={p}>• {p}</li>)}</ul>
        </div>
        <div className="card p-6">
          <div className="h3">Frameworks we align to</div>
          <div className="mt-3 flex flex-wrap gap-2">{frameworks.map(f=> <span key={f} className="badge">{f}</span>)}</div>
          <div className="small mt-6"><b>Compliance comfort:</b> GDPR‑ready processes and DPA/NDA on request.</div>
        </div>
      </div>
    </Section>
  </div>
}
