import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page from '~/components/Page'
import designDetailsPosts from '~/data/appDissections'
import DesignDetailView from '~/components/DesignDetailView'
import { DesignDetailsPost } from '~/data/appDissections'
import { useRouter } from 'next/router'
import removeMd from 'remove-markdown'
import { CenteredColumn } from '../../components/Layouts'
import { PageHeader } from '../../components/Page'
import Image from 'next/image'

import { NotionRenderer } from "react-notion";
import "tailwindcss/tailwind.css"
import "react-notion/src/styles.css";

import { getAllPosts } from './index'

export async function getStaticProps({ params: { slug } }) {
    // Get all posts again
    const posts = await getAllPosts();

    // Find the current blogpost by slug
    const post = posts.find((t) => t.slug === slug);

    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
        props: {
            blocks,
            post,
        },
    };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
      paths: posts.map((row) => `/writing/${row.slug}`),
      fallback: true,
  };
}


export default function Writing({ post, blocks }) {
  const router = useRouter()

  React.useEffect(() => {
    // handle bad slug
    if (!post) {
      router.push('/writing')
    }
  }, [])

  if (post) {
    return (
      <Page>
        <NextSeo
          title={`${post.title} · App Dissection`}
          description={post.description}
          openGraph={{
            url: `https://brianlovin.com/design-details/${post.slug}`,
            title: post.title,
            description: removeMd(post.description),
            site_name: 'App Dissection',
            images: [
              {
                url: 'https://brianlovin.com/static/meta/app-dissection.png',
                alt: 'App Dissection',
              },
            ],
          }}
        />
        <div>
        <CenteredColumn>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-8 md:items-center">
          {/* <Image
            width={'64px'}
            height={'64px'}
            layout="fixed"
            className="rounded-xl"
            src={`/static/img/design-details/${post.slug}.webp`}
            alt={post.title}
          /> */}
          <div className="flex flex-col space-y-2">
            <PageHeader title={post.title} />
            {/* <p className="p-small align-self-center">{subheading}</p> */}
          </div>
        </div>
        <div style={{ maxWidth: 768 }}>
        <NotionRenderer blockMap={blocks} />
            <style jsx global>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        :global(.notion-text) {
            caret-color: rgb(255, 255, 255);
          }
        :global(.notion) {
        color: #fff;
        }
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
        </div>

      </div>
    </CenteredColumn>
        </div>

      </Page>
    )
  }

  return null
}
