import Section from '@/components/Section'
export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Solutions by industry</h1>
      <p className="lead mt-3">We tailor architecture, compliance, and delivery to your domain so outcomes arrive faster.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {['FinTech','Retail & eCommerce','Healthcare','Manufacturing','SaaS & Startups','Public Sector'].map(x => (
          <div key={x} className="card p-6">
            <div className="h3">{x}</div>
            <p className="small mt-2">Domain-specific patterns, compliance, and integrations.</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
}
