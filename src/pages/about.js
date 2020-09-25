import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <Link to='/'>
      <span role='img' aria-label='left arrow'>
        ⬅️
      </span>{' '}
      Home
    </Link>
  </Layout>
)
