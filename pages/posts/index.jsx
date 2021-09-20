import React from 'react'
import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'

import { getAllPosts } from '../../lib/posts-util'

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage
