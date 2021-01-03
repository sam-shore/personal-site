import * as React from 'react'
import Link from 'next/link'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { Timeline } from '~/components/Timeline'


const NOTION_BLOG_ID = '4b80c7b0e00741399368cd28574de010'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const firstPosts = await getAllPosts()
  const posts = await firstPosts.sort(function(a, b){
    if(a.date > b.date) { return -1; }
    if(a.date < b.date) { return 1; }
    return 0;
})

  return {
    props: {
      posts
    },
  };
}


export default function Home({ posts }) {
  return (<>
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 md:items-center">
            <PageHeader
              title="Hey I'm Sam!"
              subtitle="I am a designer, writer, and the co-founder of Wavium and Astral. Welcome to online home!"
            />

            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <Link href="/about" passHref>
                <a>
                  <button className="w-full text-lg btn btn-primary btn-large">
                    More about me
                  </button>
                </a>
              </Link>
              <a
                href="https://twitter.com/samjshore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full text-lg btn btn-large">
                  Follow me on Twitter
                </button>
              </a>
            </div>
          </div>

          <Timeline posts={posts}/>
        </div>
      </CenteredColumn>
    </Page>
  </>);
}