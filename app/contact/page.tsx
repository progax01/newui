'use client'
import Section from '@/components/Section'
import { useState } from 'react'

export default function Page(){
  const [submitted, setSubmitted] = useState(false)
  return <div>
    <Section>
      <h1 className="h1">Tell us what you’re building</h1>
      <p className="lead mt-3">We usually respond within one business day.</p>

      {!submitted ? (
      <form className="mt-8 grid md:grid-cols-2 gap-6" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true)}}>
        <div>
          <label className="small">Full name*</label>
          <input required className="border rounded-sm w-full px-3 py-3" />
        </div>
        <div>
          <label className="small">Work email*</label>
          <input type="email" required className="border rounded-sm w-full px-3 py-3" />
        </div>
        <div>
          <label className="small">Company*</label>
          <input required className="border rounded-sm w-full px-3 py-3" />
        </div>
        <div>
          <label className="small">Country</label>
          <input className="border rounded-sm w-full px-3 py-3" />
        </div>
        <div className="md:col-span-2">
          <label className="small">What do you need?*</label>
          <textarea required rows={5} className="border rounded-sm w-full px-3 py-3"></textarea>
        </div>
        <div>
          <label className="small">Budget range</label>
          <select className="border rounded-sm w-full px-3 py-3">
            <option>Undisclosed</option>
            <option>Under $10k</option>
            <option>$10k–$50k</option>
            <option>$50k–$150k</option>
            <option>$150k+</option>
          </select>
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input type="checkbox" required />
          <span className="small">I agree to the processing of my data as described in the Privacy Policy*</span>
        </div>
        <div className="md:col-span-2">
          <button className="btn btn-primary" type="submit">Get a free quote</button>
        </div>
      </form>
      ) : (
        <div className="card p-6 mt-8">
          <div className="h3">Thank you!</div>
          <p className="small mt-2">We’ll get in touch shortly to schedule a call.</p>
        </div>
      )}
    </Section>
  </div>
}
