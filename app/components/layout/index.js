import React, { Component } from 'react'
import styles from './index.less'

export default class Layout extends Component {

  render() {
    const { a, b } = { a: 1, b: 'text' }
    return (
      <div className={styles.root}>Test {a} {b}</div>
    )
  }
}
