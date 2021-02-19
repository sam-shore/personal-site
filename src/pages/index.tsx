import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import Timeline from '~/components/Timeline'
import groq from 'groq'
import client from '../../client'
import Projects from '~/components/Projects'


const Home = ({ posts, projects }) => {
  return (<>
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col items-center text-center mb-24">
              <img src="/static/img/me.png" className=" w-80 -mb-32" />
              <h1 className=" text-9xl font-extrabold tracking-tight -z-10">Sam</h1>
              <h1 className=" text-8xl -mt-4 font-extrabold tracking-tight">Shore</h1>
              <p className="text-2xl mt-16 font-normal">Building a portfolio of wonderful internet businesses.</p>
            </div>
            <Projects projects={projects} />
            
{/* 
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
            </div> */}
          </div>

       {/*    <Timeline posts={posts} /> */}
        </div>
      </CenteredColumn>
    </Page>
  </>);
}


Home.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
  projects: await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Home