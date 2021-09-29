import * as React from "react"
import Header from '../components/Header';
import styles from './about.module.css';
// import styles form './about.module.css';

const About = () => {
  return (
    <>
        <Header title="About Page Title"/>
        <div className={styles.myTitle}>About Page</div>
    </>
  )
}

export default About
