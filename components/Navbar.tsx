import { FC } from "react";
import ActiveLink from "./ActiveLink"
import styles from './Navbar.module.css'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar: FC = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems?.map(menuItem => (

          <ActiveLink key={menuItem.text} text={menuItem.text } href={menuItem.href}/>
        ))
      }
    </nav>
  )
}

export default Navbar