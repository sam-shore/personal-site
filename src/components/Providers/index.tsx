import * as React from 'react'
import SEO from './SEO'

interface Props {
  children?: any
}

export default function Providers({ children }: Props) {
  return (
    <React.Fragment>
      <SEO />

      {children}
    </React.Fragment>
  )
}
