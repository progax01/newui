import Section from '@/components/Section'
import Link from 'next/link'

export default function Home(){
  return <div>
    <Section className="py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">Where solutions meet vision.</h1>
          <p className="lead mt-4">Solvionary delivers custom software, cloud, cybersecurity, AI/ML and blockchain solutions for global teams—on time, on budget, and enterprise‑ready.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
            <Link href="/case-studies" className="btn btn-outline">See case studies</Link>
          </div>
          <div className="mt-4 small flex flex-wrap gap-2 items-center">
            <span className="badge">ISO 27001</span>
            <span className="badge">SOC 2</span>
            <span className="badge">GDPR‑ready</span>
            <span className="badge">99.9% uptime solutions</span>
          </div>
        </div>
        <div className="card p-6">
          <div className="h3 mb-2">Architecture overview</div>
          <p className="small">Clean diagram illustrating app, data, cloud, and security layers.</p>
          <div className="mt-4 grid grid-cols-2 gap-3 small">
            <div className="card p-4"><b>App</b><br/>APIs • Frontends</div>
            <div className="card p-4"><b>Data</b><br/>DB • Streams</div>
            <div className="card p-4"><b>Cloud</b><br/>IaC • CI/CD</div>
            <div className="card p-4"><b>Security</b><br/>SDLC • IAM</div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="py-10">
      <div className="small uppercase tracking-wide text-slate-600">Trusted by teams across the US, UK, EU, Canada & Australia</div>
      <div className="mt-4 h-10 bg-slate50 rounded-md flex items-center justify-center text-slate-500 small">Client logos go here</div>
    </Section>

    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="h3">Custom Software</div>
          <p className="mt-2 small">From idea to production with clean code, CI/CD, and measurable impact.</p>
          <Link href="/services/custom-software" className="btn btn-outline mt-4">Explore</Link>
        </div>
        <div className="card p-6">
          <div className="h3">Cloud & Cyber</div>
          <p className="mt-2 small">Migrations, DevOps, and security that hardens your stack without slowing delivery.</p>
          <Link href="/services/cloud-devops" className="btn btn-outline mt-4">Explore</Link>
        </div>
        <div className="card p-6">
          <div className="h3">AI / Blockchain</div>
          <p className="mt-2 small">Practical AI/ML and secure smart contracts that move the needle.</p>
          <Link href="/services/ai-ml" className="btn btn-outline mt-4">Explore</Link>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="card p-6"><div className="h2">30%</div><div className="small">lower cloud spend after FinOps review</div></div>
        <div className="card p-6"><div className="h2">99.9%</div><div className="small">uptime for a retail e‑commerce platform</div></div>
        <div className="card p-6"><div className="h2">6×</div><div className="small">faster analytics via ML pipeline modernization</div></div>
        <div className="card p-6"><div className="h2">12 weeks</div><div className="small">to MVP for a VC‑backed SaaS</div></div>
      </div>
    </Section>

    <Section>
      <div className="card p-6">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="h3">UK Retailer consolidates to a single cloud, cuts costs by 28%</div>
            <p className="small mt-2">We migrated 21 services to Azure, implemented IaC, and introduced blue‑green deployments—improving reliability and speed to release.</p>
          </div>
          <div className="text-right"><Link href="/case-studies" className="btn btn-primary">Read the case study</Link></div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="h3">Enterprise discipline</div>
          <p className="small mt-2">SLAs, change control, and documentation—without slowing agile delivery.</p>
        </div>
        <div>
          <div className="h3">Security by design</div>
          <p className="small mt-2">Threat modeling, secure SDLC, and continuous scanning from day one.</p>
        </div>
        <div>
          <div className="h3">Global collaboration</div>
          <p className="small mt-2">Clear English communication, timezone overlap, and predictable status.</p>
        </div>
      </div>
    </Section>

    <Section className="text-center">
      <div className="h2">Bring your roadmap. We’ll ship what matters first.</div>
      <Link href="/contact" className="btn btn-primary mt-4">Talk to an expert</Link>
    </Section>
  </div>
}
