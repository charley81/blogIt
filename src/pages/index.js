import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to='/about'>
        About{' '}
        <span role='img' aria-label='right arrow'>
          ➡️
        </span>
      </Link>
    </Layout>
  )
}
