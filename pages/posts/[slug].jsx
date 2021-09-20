import React from 'react'
import Head from 'next/head'

import PostContent from '../../components/posts/post-detail/post-content'

import { getPostData, getPostsFiles } from '../../lib/posts-util'

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  )
}

export const getStaticProps = (context) => {
  const postData = getPostData(context.params.slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles()
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths: paths,
    fallback: false
  }
}

export default PostDetailPage
