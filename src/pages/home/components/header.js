import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import styles from "./style.css";
import cx from "classnames";


export default class Header extends React.Component {

  render() {

    return (
      <div className={cx(styles.one, styles.animate, styles.fadeInDown)}>
        <header className={styles.mainHeader}>
          <Link to={'/'}><div className={styles.logo}></div></Link>
          <div className={styles.navList}>
            <ul>
              <li><Link to={'contact'}>CONTACT</Link></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
