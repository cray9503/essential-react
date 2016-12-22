import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import cx from "classnames";
import styles from "./style.css";
import ParticleBack from './particleBack';
import Header from '../home/components/header';





export default class AboutPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Header />
        <div className={styles.mainBody}>
          <ParticleBack />
          <div className={styles.titleContainer}>
            <h1 className={cx(styles.two, styles.animate, styles.fadeInLeft)}>TOUCH BASE</h1>
            <h1 className={cx(styles.two, styles.animate, styles.fadeInRight)}>WITH ME.</h1>
          </div>
          <div className={styles.contactContainer}>
            <a href="mailto:connor.ray.cb@gmail.com?Subject=Job%20Inquiry">
              <h3 className={cx(styles.six, styles.animate, styles.fadeIn)}>EMAIL</h3>
            </a>
            <a href="https://www.linkedin.com/in/cray9503" target="_blank">
              <h3 className={cx(styles.six, styles.animate, styles.fadeIn)}>LINKEDIN</h3>
            </a>
            <a href="https://github.com/cray9503" target="_blank">
              <h3 className={cx(styles.six, styles.animate, styles.fadeIn)}>GITHUB</h3>
            </a>
            <a href="https://www.instagram.com/connor___ray/" target="_blank">
              <h3 className={cx(styles.six, styles.animate, styles.fadeIn)}>INSTAGRAM</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
