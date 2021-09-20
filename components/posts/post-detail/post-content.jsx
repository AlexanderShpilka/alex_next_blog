import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

import classes from './post-content.module.css'

import PostHeader from './post-header'

SyntaxHighlighter.registerLanguage('js', js)

const PostContent = (props) => {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${props.post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split('-')[1] // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line
          children={children}
        />
      )
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{props.post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
