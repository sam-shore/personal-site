import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="p-6 py-24 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4 justify-items-center">
         
   <a
            href="https://twitter.com/samjshore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-gray-800 dark:text-white"
          >
            @samjshore
          </a>
        </div>
      </div>
    </CenteredColumn>
  )
}
