import React from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Alex&apos; Blog</title>
      </Head>
      <div>
        <Hero />
        <FeaturedPosts posts={props.posts} />
      </div>
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage
