import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

export default function Home() {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to='/about'>About &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
