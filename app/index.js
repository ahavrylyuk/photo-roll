import ReactDOM from 'react-dom'
import React from 'react'
import Layout from './components/layout'

module.exports = (model, id) => {
  ReactDOM.render((
    <Layout {...model}>
      <div>Innner content</div>
    </Layout>
  ), document.getElementById(id))
}
