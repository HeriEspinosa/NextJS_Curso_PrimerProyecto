import { FC } from "react"
import { MainLayout } from "../../components/layouts/MainLayout"
import Link from "next/link"

const index: FC = () => {
  return (
    <MainLayout>
            <>
            <h1>Pricing</h1>
            <br />

          <h1 className={'title'}>
            Ir a <Link href="/"> Home</Link>
            </h1>
            </>
    </MainLayout>
  )
}

export default index