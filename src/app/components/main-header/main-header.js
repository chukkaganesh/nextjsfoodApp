import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import logoImg from '@/app/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              {/* <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Foodies Community</Link> */}
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
