import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Secure smart contracts, real business value</h1>
      <p className="lead mt-3">We build and audit contracts with an eye on security, gas efficiency, and compliance—and integrate them with your existing systems.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Smart contract design & audits</li><li>• Wallet & payments integration</li><li>• Oracles & off‑chain services</li><li>• Private/consortium chains where needed</li><li>• Post‑deploy monitoring</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">Solidity, Hardhat, OpenZeppelin, EVM chains, Subgraphs</p>
          
          
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Talk to a blockchain engineer</Link>
      </div>
    </Section>
  </div>
}
