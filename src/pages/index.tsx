import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page, { PageHeader } from '~/components/Page'
import PostDetailsGrid from '~/components/PostDetailsGrid'
import { CenteredColumn } from '~/components/Layouts'
import groq from 'groq'
import client from '../../client'
import Link from "next/link";

interface Props {
  slug: any
  posts: any
}


const Index = ({ posts }: Props) => {

  return (
    <Page>
      <NextSeo
        title={'Sam Shore'}
        description={'Building businesses online.'}
        openGraph={{
          url: 'https://samjshore.com',
          title: 'Sam Shore',
          description: 'Building businesses online.',
          site_name: 'Sam Shore',
          images: [
            {
              url: 'https://samjshore.com/static/meta/home.png',
              alt: 'Sam Shore',
            },
          ],
        }}
      />

      <CenteredColumn>
        <div className={"mx-auto flex flex-row items-center justify-center mb-8 space-x-2"}>
        <img src="https://pbs.twimg.com/profile_images/1364015106934341635/RFdTKNZq_400x400.jpg" className={"rounded-full w-8 h-8"} />
        <h2 className={"font-semibold text-xl"}>Sam Shore</h2>

        </div>
       
        <div className="flex flex-col space-y-8">
          <PostDetailsGrid posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
})

export default Index
