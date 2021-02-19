import * as React from 'react'
import { NextSeo } from 'next-seo'
import ReadingList from '~/components/Reading'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { Info } from 'react-feather'

const NOTION_BLOG_ID = '4b80c7b0e00741399368cd28574de010'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
  };
}

function Reading({ posts }) {
  return (
    <Page>
      <NextSeo
        title={'Reading'}
        description={"Articles and books that I'm reading."}
        openGraph={{
          url: 'https://samjshore.com/reading',
          title: 'Reading',
          description: "Articles and books that I'm reading.",
          images: [
            {
              url: 'https://samjshore.com/static/meta/reading.png',
              alt: "Articles and books that I'm reading.",
            },
          ],
        }}
      />
      <CenteredColumn>
        <PageHeader title="Reading" subtitle="Articles and books that I'm reading." />

        <ReadingList posts={posts} />

        <div className="flex flex-col p-6 mt-16 space-y-3 bg-yellow-100 rounded-lg dark:bg-gray-900">
          <div className="flex items-center">
            <Info
              size={20}
              className="mr-3 text-yellow-900 dark:text-gray-100"
            />
            <p className="font-semibold text-yellow-900 dark:text-gray-100">
              Have somehing you think I'd like to read?
            </p>
          </div>
          <p className="font-normal text-yellow-900 dark:text-gray-300">
            Ping me at samshore@hey.com
          </p>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Reading
