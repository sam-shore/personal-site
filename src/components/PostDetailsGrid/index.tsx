import * as React from 'react'
import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../../client'
import { useRouter } from 'next/router'

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}


export default function PostDetailsGrid({ posts }) {
  if (!posts || posts.length === 0) return null
  return (
    <div className="flex flex-col space-y-5">
      {posts.map(
        ({ _id, title = '', slug = '', publishedAt = '', description = '', body = '' }) =>
          slug && (
            <div key={_id}>
              <div style={{boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.05)"}} className="flex flex-col p-8 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-2xl space-y-4 items-center justify-center" key={title}>
                <div className={"flex flex-row space-x-2 items-center"}>
                  {/* <svg className="w-4 h-4 dark:text-gray-600 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                  <p className="text-gray-400 text-sm">{new Date(publishedAt).toDateString()}</p>
                </div>
                  <a className="text-gray-900 dark:text-white font-bold text-3xl mx-auto">{title}</a>

                <div className="prose prose-md text-primary dark:text-gray-400 text-gray-700">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
        </div>
              </div>
            </div>
          )
      )}

    </div>
  )
}