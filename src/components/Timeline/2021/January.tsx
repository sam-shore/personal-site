import * as React from 'react'
import { BlogPost } from '../BlogPost'
import { ButtonSet, DateEntry, Notes, TimelineEntry } from '../Entry'
import { Layers, Plus, Zap, List, Book } from 'react-feather'


export function January( {posts} ) {
  console.log(posts)
  return (
    <>
      <DateEntry title="January, 2021" />

  {posts.map((post) => (<div key={post.title}>
  {console.log(post.status)}
    {post.status === "Published" ? post.type === "Entry" ? 
    <TimelineEntry
    title={post.title}
    timestamp={post.date}
    Icon={Plus}
  >
    <>
      <Notes>
        <p>
         {post.description}
        </p>
      </Notes>
      {post.link ? <ButtonSet>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Read the blog post
        </a>
      </ButtonSet> : null}
    </>
  </TimelineEntry>
    
    : post.type === "Post" ?

    <BlogPost
        timestamp={post.date}
        slug={post.slug}
        title={post.title}
        description={post.description}
      />

    : post.type === "Announcement" ? 
    
    <TimelineEntry
    title={post.title}
    timestamp={post.date}
    Icon={Zap}
    tint={'purple'}
    divider={true}
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={post.link}
    >
      <div className="flex flex-col align-middle justify-center overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row dark:bg-gray-900 hover:shadow-cardHover">
        <div className="flex flex-col justify-center px-3 py-3 space-y-1 md:items-center">
          <h5 className="px-2 pt-2">{post.title}</h5>
          <p className="flex-1 px-2 font-normal md:text-center">
            {post.description}
          </p>
          <span />
          <div className="btn btn-primary">View the project</div>
        </div>
      </div>
    </a>
  </TimelineEntry>

    : post.type === "Inventory" ? 
    <TimelineEntry
    title={`Added ${post.title} to inventory`}
    timestamp={post.date}
    Icon={List}
    tint ={'red'}
  >
    <>
      <Notes>
        <p>
         {post.description}
        </p>
      </Notes>
      {post.link ? <ButtonSet>
        <a
          href="/inventory"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Inventory
        </a>
      </ButtonSet> : null}
    </>
  </TimelineEntry>
   : post.type === "Reading" ? 
   <TimelineEntry
    title={<a>Read: <a href={post.link} target="_blank" className={"italic dark:text-blue-500 text-blue-500"}>{post.title}</a></a>}
    timestamp={post.date}
    Icon={Book}
    tint ={'blue'}
  >
    <>
      <Notes>
        <p>
         {post.description}
        </p>
      </Notes>
      {post.link ? <ButtonSet>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Read Article
        </a>
      </ButtonSet> : null}
    </>
  </TimelineEntry>
   : null : null
    
    }
    
  </div>))}
    </>
  )
}
