import * as React from 'react'
import { NextSeo } from 'next-seo'
import InventoryList from '~/components/Inventory'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { Info } from 'react-feather'
import Recommendations from '~/components/Stack/Recommendations'

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

function Inventory({ posts }) {
  return (
    <Page>
      <NextSeo
        title={'Inventory'}
        description={'My current inventory of products.'}
        openGraph={{
          url: 'https://samjshore.com/inventory',
          title: 'Inventory',
          description: 'My current inventory of products.',
          images: [
            {
              url: 'https://samjshore.com/static/meta/inventory.png',
              alt: 'My current inventory of products.',
            },
          ],
        }}
      />
      <CenteredColumn>
        <PageHeader title="Inventory" subtitle="My current inventory of products." />

        <InventoryList posts={posts} />

        <div className="flex flex-col p-6 mt-16 space-y-3 bg-yellow-100 rounded-lg dark:bg-gray-900">
          <div className="flex items-center">
            <Info
              size={20}
              className="mr-3 text-yellow-900 dark:text-gray-100"
            />
            <p className="font-semibold text-yellow-900 dark:text-gray-100">
              About my inventory
            </p>
          </div>
          <p className="font-normal text-yellow-900 dark:text-gray-300">
            These are the tools, products, and software that I use everyday. Whenever I buy something new I add it to my inventory.
          </p>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Inventory
