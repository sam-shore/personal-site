import * as React from 'react'
import PostDetailsCard from '~/components/PostDetailsCard'
import { DesignDetailsPostSummary } from '~/data/appDissections'
import Link from 'next/link'


export default function PostDetailsGrid({ posts }) {

  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-5">
      {posts.reverse().map((post) => (<>
      {post.status === "Published" ? post.type === "Post" ?  
      
      <div className="flex flex-col space-y-1" key={post.title}>
          <Link
            href="/writing/[slug]"
            as={`/writing/${post.slug}`}
            passHref
          >
            <a className="text-blue-600 dark:text-blue-500">{post.title}</a>
          </Link>
          {post.description && <p className="clamp-2">{post.description}</p>}
          <p className="p-small">{post.date}</p>
        </div>

      : null : null}
        
        </>))}
    </div>
  )
}
