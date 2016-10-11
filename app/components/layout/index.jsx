import 'styles/normalize.less'

import React, { Component, PropTypes } from 'react'
import styles from './index.less'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.number,
    string: PropTypes.string
  }

  render() {
    const { number, string, children } = this.props
    return (
      <div>
        Content {number} {string}
        <div className={styles.root}>{children}</div>
        <div>Footer</div>
      </div>
    )
  }
}
