import React from "react";
import styles from './index.module.css';

const BlockTitle = (props) => (
  <>
    <h1 className={styles.blockTitle}> {props.title} </h1>
    <div className={styles.description}>{props.description}</div>
  </>
)

export default BlockTitle;