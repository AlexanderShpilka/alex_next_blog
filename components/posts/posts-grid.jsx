import React from 'react'

import PostItem from './post-item'

import classes from './posts-grid.module.css'

const PostsGrid = (props) => {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostsGrid