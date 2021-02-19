import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page, { PageHeader } from '~/components/Page'
import PostDetailsGrid from '~/components/PostDetailsGrid'
import { CenteredColumn } from '~/components/Layouts'
import groq from 'groq'
import client from '../../../client'
import Link from "next/link";

interface Props {
  slug: any
  posts: any
}


const Index = ({ posts }: Props) => {

  return (
    <Page>
      <NextSeo
        title={'Notebook'}
        description={'Explorations and learnings along the way.'}
        openGraph={{
          url: 'https://samjshore.com/notebook',
          title: 'Notebook',
          description: 'Explorations and learnings along the way.',
          site_name: 'Noteboook',
          images: [
            {
              url: 'https://samjshore.com/static/meta/notebook.png',
              alt: 'Notebook',
            },
          ],
        }}
      />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-8 md:items-center md:text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">Notebook</h1>
            <p className="text-2xl">Explorations and learnings along the way.</p>
          </div>
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
