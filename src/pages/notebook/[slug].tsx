import React, { useEffect, useState } from "react";
import { NextSeo } from 'next-seo'
import Page from '~/components/Page'
import { useRouter } from 'next/router'
import { CenteredColumn } from '../../components/Layouts'
import { PageHeader } from '../../components/Page'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../../client'
import { useParams } from "react-router-dom";


const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function writing(props) {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = props

  const router = useRouter()

  React.useEffect(() => {
    // handle bad slug
    if (!props.body) {
      router.push('/writing')
    }
  }, [])
  return (
    <Page>
        <NextSeo
          title="post title"
          description="post desc"
          openGraph={{
            url: `https://samjshore.com/notebook/`,
            title: "post title",
            description: "post title",
            site_name: 'Notebook',
            images: [
              {
                url: 'https://samjshore.com/static/meta/notebook.png',
                alt: 'Notebook',
              },
            ],
          }}
        />
        <div>
        <CenteredColumn>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-8 md:items-center">
          <div className="flex flex-col space-y-2">
            <PageHeader title={title} />
          </div>
        </div>
        <div className="prose prose-md text-primary">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
        </div>

      </div>
    </CenteredColumn>
        </div>

      </Page>
  )
  
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

writing.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default writing