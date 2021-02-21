import * as React from 'react'
import Link from 'next/link'


export default function PostDetailsGrid({ posts }) {
  console.log(posts)


  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-5">
      {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '', description = '' }) =>
            slug && (
              <div key={_id}>
                      <div className="flex flex-col space-y-1" key={title}>
                        <Link
                          href="/notebook/[slug]"
                          //@ts-ignore
                          as={`/notebook/${slug.current}`}
                          passHref
                        >
                          <a className="text-gray-900 dark:text-white font-mono text-xl">{title}</a>
                        </Link>
                        {description && <p className="clamp-2 dark:text-gray-400 text-gray-600 font-light">{description}</p>}
                          <p className="dark:text-gray-600 text-gray-400 text-sm">{new Date(_updatedAt).toDateString()}</p>
                      </div>
              </div>
            )
        )}
    
    </div>
  )
}
