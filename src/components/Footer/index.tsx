import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 p-6 py-24 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4">
          <Link href="/" as="/" passHref>
            <a className="black-link">Home</a>
          </Link>

          <Link href="/about" as="/about" passHref>
            <a className="black-link">About</a>
          </Link>

          <a
            href="https://twitter.com/samjshore"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            @samjshore
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/writing" as="/writing" passHref>
            <a className="black-link">Writing</a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/reading" as="/reading" passHref>
            <a className="black-link">Reading</a>
          </Link>
        </div>
      </div>
    </CenteredColumn>
  )
}
