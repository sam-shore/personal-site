import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { initApolloClient } from '~/graphql/services/apollo'
import { GET_HOME } from '~/graphql/queries'
import { Post, Episode, Repo } from '~/graphql/types.generated'
import { DesignDetailsPostSummary, summaries } from '~/data/appDissections'
import Divider from '~/components/Divider'

interface Props {
  data: {
    posts: Post[]
    episodes?: Episode[]
    repos?: Repo[]
  }
  summaries: DesignDetailsPostSummary[]
}

function About({ data, summaries }: Props) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12" data-cy="about-page">
          <div className="-mx-4 -mt-24 md:mt-0 md:-mx-8 ">
            <Image
              src="/static/img/about.jpg"
              alt={'A photo of me'}
              layout="responsive"
              width="672"
              height="448"
              className="md:rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col prose lg:prose-lg">
              <p>
                👋 I’m Sam! I design and build products.
              </p>
              <p>
                Right now I’m working on {' '}
                <a
                  href="https://astral.so"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Astral.so
                </a>{' '}
                , a tool that helps startups track and improve their product market fit, without needing to build anything. Before Astral, I co-founded{' '}
                <a
                  href="https://wavium.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wavium
                </a>
                , a platform that helps content creators convert their followers into email and text message subscribers.
              </p>
              <p>
                Wanna chat? You can find me on{' '}
                <a
                  href="https://twitter.com/samjshore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              
              </p>
            </div>

            <Divider />

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Writing</h4>

                <p className="text-lg">
                  My thoughts on tech, startups, business, and philosophy.
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <Link href="/writing" as="/writing" passHref>
                  <a className="text-blue-600 dark:text-blue-500">
                    See all posts &rarr;
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <h4>Startups</h4>
                <p className="text-lg">What I'm currently working on.</p>
              </div>

              <div className="flex flex-col space-y-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                  href="https://astral.so"
                >
                  Astral
                </a>
                <p>
                  A tool that helps startups track and improve their product market fit.
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-500"
                  href="https://wavium.co"
                >
                  Wavium
                </a>
                <p>
                A platform that helps content creators convert their followers into email and text message subscribers.
                </p>
              </div>
              <div />
            </div>


            



          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
/* 
export async function getStaticProps() {
  const client = await initApolloClient({})
  const { data } = await client.query({ query: GET_HOME })
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      data,
      apolloStaticCache: client.cache.extract(),
      summaries,
    },
  }
} */

export default About
