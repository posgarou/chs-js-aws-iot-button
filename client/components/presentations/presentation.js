import React from 'react'

import Header from './header'
import Entry from './entry'

const Presentation = ({ events }) => (
  <div>
    <Header>CharlestonJS Presentation</Header>
    {events.map(renderEvent)}
  </div>
)

const renderEvent = (event, i) => (
  <Entry key={i} event={event} />
)

export default Presentation
