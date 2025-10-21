import Section from '@/components/Section'
export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">People who care about doing it right</h1>
      <p className="lead mt-3">Solvionary is a team of engineers, designers, and advisors who believe reliability and usability are inseparable.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="h3">Our story</div>
          <p className="small mt-2">We founded Solvionary to bridge vision and execution. Our promise is simple: ship value early, keep it secure, and document what matters so you can move faster with confidence.</p>
        </div>
        <div className="card p-6">
          <div className="h3">Leadership</div>
          <p className="small mt-2"><b>Priya Nair — Principal Architect</b><br/>15+ years building cloud platforms and secure APIs. Leads our architecture guild.</p>
        </div>
        <div className="card p-6">
          <div className="h3">Careers</div>
          <p className="small mt-2">We hire for curiosity, craft, and clarity.</p>
        </div>
      </div>
    </Section>
  </div>
}
