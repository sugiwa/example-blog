import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerBlock}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        <li className={styles.menu}>
          <Link to='/blog' className={styles.menuLink}>Blog</Link>
        </li>
        <li className={styles.menu}>
          <Link to='/about' className={styles.menuLink}>About</Link>
        </li>
        <li className={styles.menu}>
          <Link to='/contact' className={styles.menuLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
