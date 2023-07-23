import { useRouter } from "next/router"
import Link from "next/link"

const style = {
  color: '#0070f3',
  textDecoration: "underline"
}

const ActiveLink = ({text, href}) => {

  const {asPath} = useRouter();


  return (
    <Link style={asPath === href ? style :  null } href={href}>
      {text}
    </Link>
  )
}

export default ActiveLink