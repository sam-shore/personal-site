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
        <div className="grid grid-cols-1 sm:grid-cols-3 grid-flow-row gap-12  sm:-mx-24">
        {projects.map(
            ({ _id, title = '',  description = '', color = '', status = '', url = '', mainImage = '' }) =>
                <div key={_id}>
                                
                                <div className="flex flex-col justify-center items-stretch space-y-4">
                                    <img src={urlFor(mainImage).url()} className="w-16 mx-auto" />
                                    <div className={"flex flex-col space-y-1"}>
                                        <h2 className="text-2xl font-mono text-gray-900 dark:text-white mx-auto">{title}</h2>
                                        <p className="clamp-2 dark:text-gray-400 text-gray-600 font-light text-center">{description}</p>
                                    </div>
                                    <a href={url} target="_blank" className={`py-3 px-4 bg-gray-100 mr-auto text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-mono mx-auto`}>View Project</a>
                                </div>
                        </div>
          )}
    
      </div>
    )
  }