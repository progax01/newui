import { ReactNode } from 'react'
export default function Section({children, className='' }:{children:ReactNode, className?:string}){
  return <section className={`container py-16 ${className}`}>{children}</section>
}
