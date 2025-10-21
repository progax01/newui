import Section from '@/components/Section'
import Link from 'next/link'

const services = [
  {href:'/services/custom-software', title:'Custom Software Development', desc:'Ship reliable systems with clean architecture, automated testing, and CI/CD.'},
  {href:'/services/cloud-devops', title:'Cloud & DevOps', desc:'Migrate, optimize, and operate on AWS, Azure, or GCP with IaC and observability.'},
  {href:'/services/cybersecurity', title:'Cybersecurity', desc:'Secure SDLC, appsec, cloud posture, pen tests, incident readiness, and training.'},
  {href:'/services/it-consulting', title:'IT Consulting', desc:'Architecture reviews, roadmaps, audits, and interim leadership to unlock throughput.'},
  {href:'/services/ai-ml', title:'AI & Machine Learning', desc:'Data readiness to production ML with MLOps and human-in-the-loop.'},
  {href:'/services/blockchain', title:'Blockchain Development', desc:'Secure smart contracts, audits, and integrations for real-world value.'},
  {href:'/services/web', title:'Web Development', desc:'Fast, accessible websites and portals that convert with headless CMS & SEO.'},
  {href:'/services/mobile', title:'Mobile App Development', desc:'Native and cross-platform apps with telemetry and continuous delivery.'},
]

export default function Services(){
  return <div>
    <Section>
      <h1 className="h1">Services built for outcomes</h1>
      <p className="lead mt-3">From greenfield builds to modernization, we align architecture, delivery, and security to your goals.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map(s => (
          <div key={s.href} className="card p-6">
            <div className="h3">{s.title}</div>
            <p className="small mt-2">{s.desc}</p>
            <Link href={s.href} className="btn btn-outline mt-4">Explore</Link>
          </div>
        ))}
      </div>
    </Section>
    <Section className="text-center">
      <div className="h2">Not sure where to start?</div>
      <a href="/contact" className="btn btn-primary mt-4">Book a consultation</a>
    </Section>
  </div>
}
