import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Cloud done right, from landing zone to run</h1>
      <p className="lead mt-3">We migrate and modernize workloads with repeatable infrastructure, cost controls, and robust observability—so your team can ship faster with fewer surprises.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Cloud landing zones & IaC (Terraform/Bicep)</li><li>• CI/CD pipelines & artifact strategy</li><li>• Monitoring, logging & SLOs</li><li>• FinOps reviews & right‑sizing</li><li>• DR/BCP planning and chaos drills</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">AWS, Azure, GCP, Terraform, GitHub Actions, ArgoCD, Helm, Prometheus, Grafana</p>
          
          <div className='small mt-6'><b>Proof:</b> Consolidated 3 clouds → one, 28% cost reduction, faster releases.</div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Talk to an expert</Link>
      </div>
    </Section>
  </div>
}
