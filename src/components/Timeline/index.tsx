import * as React from 'react'
import { ButtonSet, DateEntry, Notes, TimelineEntry } from './Entry'
import Image from 'next/image'
import { Layers, Plus, Zap, List, Book, Camera } from 'react-feather'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../../client'

const Timeline = ({ posts }) => {
  return (

    <div className="flex flex-col space-y-5">
      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '', description = '', body = '' }) =>
          slug && (
            <div key={_id}>
              <div>
                <TimelineEntry
                  title={<a href={"hss"} target="_blank" className={"dark:text-white text-gray-900"}>{title}</a>}
                  timestamp={new Date(_updatedAt).toDateString()}
                  Icon={Book}
                  tint={'blue'}
                >
                  <>
                    <Notes>
                    <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />    
                    </Notes>
                    {/* <Link
                          href="/notebook/[slug]"
                          //@ts-ignore
                          as={`/notebook/${slug.current}`}
                          passHref
                        >
                    
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Read Full Post
        </a>
                        </Link> */}
                  </>
                </TimelineEntry>
              </div>
            </div>
          )
      )}

    </div>
  )
}

export default Timeline
