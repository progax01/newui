import Section from '@/components/Section'
import Link from 'next/link'

export default function Page(){
  return <div>
    <Section>
      <h1 className="h1">Practical AI that earns its keep</h1>
      <p className="lead mt-3">We prepare your data, choose the right models, and deploy ML with MLOps so it keeps working in production—ethically and securely.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <div className="h3">What we deliver</div>
          <ul className="mt-3 space-y-2 small">
            <li>• Data audits & feature engineering</li><li>• Model development & evaluation</li><li>• MLOps (CI/CD for models, monitoring, drift)</li><li>• Human‑in‑the‑loop tooling</li><li>• Responsible AI reviews</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="h3">Tech & tools</div>
          <p className="small mt-2">Python, PyTorch, TensorFlow, scikit‑learn, Ray, MLflow, SageMaker, Vertex AI</p>
          
          <div className='small mt-6'><b>Proof:</b> 6× faster analytics for a manufacturer via anomaly detection.</div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn btn-primary">Discuss your AI use case</Link>
      </div>
    </Section>
  </div>
}
