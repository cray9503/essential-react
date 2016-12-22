import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router';
import styles from "./style.css";
import cx from "classnames";
import Header from './components/header';
import ParticleBack from './components/particleBack';
import SelectedWork from './components/selectedWork';


export default class HomePage extends React.Component {

  constructor () {
      super()
      this.state = {
        visable: false,
        hidden: true
      }
    }

  componentDidMount() {
    this.setState({ visable: true, hidden: false});
  }

  render() {

    return (
      <div className={styles.content}>
        <Header />
        <div className={styles.mainBody}>
          <ParticleBack />
          <div className={styles.titleContainer}>
            <h1 className={cx(styles.two, styles.animate, styles.fadeInLeft)}>FRONT-END</h1>
            <h1 className={cx(styles.two, styles.animate, styles.fadeInRight)}>DEVELOPER</h1>
          </div>
        </div>
        <SelectedWork />
      </div>
    );
  }
}
