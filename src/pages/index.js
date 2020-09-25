import React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to='/about'>About ➡️</Link>
    </>
  )
}
