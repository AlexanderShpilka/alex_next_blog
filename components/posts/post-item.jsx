import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

const PostItem = (props) => {
  const formattedDate = new Date(props.post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`
  const linkPath = `/posts/${props.post.slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={props.post.title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={classes.content}>
            <h3>{props.post.title}</h3>
            <time>{formattedDate}</time>
            <p>{props.post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
