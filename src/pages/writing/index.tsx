import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page, { PageHeader } from '~/components/Page'
import PostDetailsGrid from '~/components/PostDetailsGrid'
import { summaries } from '~/data/appDissections'
import { CenteredColumn } from '~/components/Layouts'

import Link from "next/link";

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

export default function Writing( {posts} ) {
  return (
    <Page>
      <NextSeo
        title={'Writing'}
        description={'My thoughts on tech, startups, business, and philosophy.'}
        openGraph={{
          url: 'https://samjshore.com/writing',
          title: 'Writing',
          description: 'My thoughts on tech, startups, business, and philosophy.',
          site_name: 'Writing',
          images: [
            {
              url: 'https://samjshore.com/static/meta/writing.png',
              alt: 'Writing',
            },
          ],
        }}
      />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <PageHeader
            title="Writing"
            subtitle="My thoughts on tech, startups, business, and philosophy."
          />
          <PostDetailsGrid posts={posts} />

        </div>
      </CenteredColumn>
    </Page>
  )
}
