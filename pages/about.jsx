import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'


const AboutPage = () => {
  return (

    <>
      <h1>About</h1>
            <br />
          <h1 className={'title'}>
            Ir a  <Link href="/"> Home</Link>
        </h1>
    </>
            
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page) {

  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
  </MainLayout>
  )
}

