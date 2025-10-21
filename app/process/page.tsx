import Section from '@/components/Section'
export default function Page(){
  const steps = [
    ["Discover","Business goals, constraints, success metrics."],
    ["Design","Architecture, security, and delivery plan."],
    ["Kickoff","Roles, ceremonies, and toolchain."],
    ["Build","Iterative delivery, demos, and traceable decisions."],
    ["Harden","Performance, security, and compliance checks."],
    ["Run","Monitoring, SLOs, and a predictable change cadence."]
  ]
  return <div>
    <Section>
      <h1 className="h1">A clear, six‑step delivery framework</h1>
      <p className="lead mt-3">Transparent collaboration from first call to steady‑state run.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {steps.map(([t,d],i) => (
          <div key={i} className="card p-6">
            <div className="h3">{i+1}. {t}</div>
            <p className="small mt-2">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
}
