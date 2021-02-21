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
                          <a className="text-gray-900 dark:text-white font-mono text-xl bg-blue-100 dark:bg-blue-900 bg-opacity-50 mr-auto">{title}</a>
                        </Link>
                        {description && <p className="clamp-2 dark:text-gray-400 text-gray-600 font-light">{description}</p>}
                          <div className={"flex flex-row space-x-2 items-center"}>
                          <svg className="w-4 h-4 dark:text-gray-600 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <p className="dark:text-gray-600 text-gray-400 text-sm font-mono font-thin tracking-tight">{new Date(_updatedAt).toDateString()}</p>
                          </div>
                      </div>
              </div>
            )
        )}
    
    </div>
  )
}
