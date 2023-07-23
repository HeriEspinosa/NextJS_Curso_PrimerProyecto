import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function Home() {
  return (
    
      
    <MainLayout>
            <h1>Home</h1>
            <br />
            <h2 className={"title"}>
            
            Ir a <Link href="/about">About</Link>
            <br/>
            Ir a <Link href="/contact">Contact</Link>
            <br/>
            Ir a <Link href="/pricing">Pricing</Link>
            </h2>

          <div style={{marginTop: "2em"}}>
          <code className={'code'}>Domingo y estoy aprendiendo NEXT</code>
          </div>
    </MainLayout>

          

  )
}
