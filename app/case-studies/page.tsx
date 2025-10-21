import Section from '@/components/Section'
export default function Page(){
  const cases = [
    {
      title: "Consolidated cloud, 28% cost reduction for UK retailer",
      ctx: "Multi‑cloud drift, slow releases, rising spend.",
      sol: "Azure landing zone, Terraform, ArgoCD, SLOs, FinOps guardrails.",
      out: "28% cost ↓, 2× release frequency, 99.9% uptime."
    },
    {
      title: "12‑week MVP fuels Series A for US SaaS",
      ctx: "Need to validate core value fast with clean runway.",
      sol: "DDD, React/Node, Postgres, CI/CD, feature flags, product analytics.",
      out: "On‑time MVP, 30% activation lift, investor confidence."
    },
    {
      title: "Predictive maintenance cuts downtime 35% in manufacturing",
      ctx: "Unplanned outages and manual checks.",
      sol: "Streaming ingestion, anomaly detection model, Grafana dashboards, alerts.",
      out: "35% downtime ↓, maintenance from reactive to proactive."
    }
  ]
  return <div>
    <Section>
      <h1 className="h1">Real projects, real outcomes</h1>
      <p className="lead mt-3">Names available under NDA.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cases.map(c => (
          <div key={c.title} className="card p-6">
            <div className="h3">{c.title}</div>
            <div className="small mt-2"><b>Context:</b> {c.ctx}</div>
            <div className="small mt-2"><b>Solution:</b> {c.sol}</div>
            <div className="small mt-2"><b>Outcome:</b> {c.out}</div>
          </div>
        ))}
      </div>
    </Section>
  </div>
}
