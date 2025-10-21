import Section from '@/components/Section'
import Link from 'next/link'
export default function Page(){
  const posts = [
    ["How to choose a cloud landing zone in 2025","6 min read • Cloud"],
    ["Threat modeling your MVP in under 60 minutes","5 min read • AppSec"],
    ["Practical ML: from POC to production","7 min read • AI/ML"]
  ]
  return <div>
    <Section>
      <h1 className="h1">Practical insights from the field</h1>
      <p className="lead mt-3">Short, actionable reads on shipping secure, scalable software.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {posts.map(([t,m]) => (
          <div key={String(t)} className="card p-6">
            <div className="h3">{t}</div>
            <div className="small mt-2">{m}</div>
            <Link href="#" className="btn btn-outline mt-4">Read more</Link>
          </div>
        ))}
      </div>
      <div className="card p-6 mt-10">
        <div className="h3">Get monthly insights</div>
        <form className="mt-3 flex gap-3">
          <input type="email" placeholder="Work email" className="border rounded-sm px-3 py-3 flex-1" />
          <button className="btn btn-primary" type="button">Subscribe</button>
        </form>
        <div className="small mt-2">You can unsubscribe anytime. See our Privacy Policy.</div>
      </div>
    </Section>
  </div>
}
