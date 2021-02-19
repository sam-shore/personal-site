import * as React from 'react'
import PostDetailsCard from '~/components/PostDetailsCard'
import { DesignDetailsPostSummary } from '~/data/appDissections'
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
                          <a className="text-blue-600 dark:text-blue-500">{title}</a>
                        </Link>
                        {description && <p className="clamp-2">{description}</p>}
                        <p className="p-small">{new Date(_updatedAt).toDateString()}</p>
                      </div>
              </div>
            )
        )}
    
    </div>
  )
}
