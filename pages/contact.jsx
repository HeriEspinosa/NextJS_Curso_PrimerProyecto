import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


const contact = () => {
  return (
    
    <MainLayout>

            <h1>Contact</h1>
            <br />

          <h1 className={'title'}>
            Ir a <Link href="/"> Home</Link>
            </h1>
    </MainLayout>

  )
}

export default contact