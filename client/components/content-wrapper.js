import React from 'react'

import styled from 'styled-components'

const PageWrapper = styled.main`
  font-family: 'Open Sans', sans-serif;
  padding: 1em;
  text-align: center;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito Sans', sans-serif;
  }
`

const BoundedArea = styled.section`
  max-width: 30em;
  margin: 1em auto;
  text-align: left;
`

export default ({ children }) => (
  <PageWrapper>
    <BoundedArea>
      {children}
    </BoundedArea>
  </PageWrapper>
)
