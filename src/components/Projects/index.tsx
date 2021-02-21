import * as React from 'react'
import Link from 'next/link'
import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
  }

export default function Projects({ projects }) {  
    if (!projects || projects.length === 0) return null
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-12">
        {projects.map(
            ({ _id, title = '',  description = '', color = '', status = '', url = '', mainImage = '' }) =>
                <div key={_id}>
                            <div className="flex flex-row items-center space-x-4">
                                <div>
                                 <img src={urlFor(mainImage).url()} className="w-16" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex flex-row items-center text-gray-900 space-x-2 dark:text-white">
                                        <h2 className="text-2xl font-mono">{title}</h2>
                                        <div className={`px-2 py-1 bg-blue-500 bg-opacity-20 text-xs font-bold text-blue-500 rounded-full`}>{status}</div>
                                    </div>
                                    <p className="clamp-2 dark:text-gray-400 text-gray-600 font-light">{description}</p>
                                    <a href={url} target="_blank" className={`text-base text-blue-500`}>Check it out</a>
                                </div>
                            </div>
                        </div>
          )}
    
      </div>
    )
  }