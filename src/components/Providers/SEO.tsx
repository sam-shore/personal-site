import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Sam Shore',
  description: 'Founder & Designer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samjshore.com',
    site_name: 'Sam Shore',
    images: [
      {
        url: 'https://samjshore.com/static/meta/home.png',
        alt: 'Sam Shore',
      },
    ],
  },
  twitter: {
    handle: '@samjshore',
    site: '@samjshore',
    cardType: 'summary_large_image',
  },
}

export default function SEO() {
  const router = useRouter()

  let emoji = '💫'
  if (router.route.indexOf('/notebook') === 0) emoji = '📚'

  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/static/meta/mask-icon.svg"
          color={'#050505'}
        />
        <link rel="manifest" href="/static/meta/manifest.json" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
    </React.Fragment>
  )
}
