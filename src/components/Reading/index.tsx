import * as React from 'react'
import Image from 'next/image'
import data from './data'

export default function ReadingList({ posts }) {
  const sortedPosts = posts.sort(function (a, b) {
    if (a.date > b.date) { return -1; }
    if (a.date < b.date) { return 1; }
    return 0;
  })

  return (
    <div className="flex flex-col mt-16">
      {sortedPosts.map((post) => {
        console.log(post.tag)
        return (<>
          {post.type === "Reading" ?

            <a
              key={post.title}
              className="flex py-4 rounded-lg sm:p-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-900"
              href={post.link}
              target="_blank"
              rel="nooopener noreferrer"
            >
              {/*               <Image
                src={`${post.imageUrl}`}
                width={64}
                height={64}
                layout="fixed"
                alt={`${post.title} icon`}
                className="border border-gray-100 dark:border-gray-900 rounded-xl flex-0"
              /> */}
              <div className="flex flex-col justify-center flex-1 col-span-3 pl-5 space-y-2">
                <div className="flex flex-col">
                  <p>{post.title}</p>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
                <div className="flex space-x-2">

                  {post.tag === "Book" ?

                    <span className="self-start px-3 py-0.5 text-xs font-medium leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 border border-purple-600 rounded-full">
                      {post.tag}
                    </span>

                    :



                    <span className="self-start px-3 py-0.5 text-xs font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 border border-green-600 rounded-full">
                      {post.tag}
                    </span>
                  }


                  {post.status === "Reading" ? <span className="self-start px-3 py-0.5 text-xs font-medium leading-5 tracking-wide dark:text-yellow-400 dark:yellow-purple-400 text-yellow-600 border border-yellow-600 rounded-full">
                    In Progress
                  </span>
                    : null}

                </div>
              </div>
            </a>

            : null}
        </>)
      })}
    </div>
  )
}
