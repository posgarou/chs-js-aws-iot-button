import React from 'react'

import styled from 'styled-components'

import TimeAgo from 'react-timeago'

export default ({ event }) => (
  <Event>
    <Timestamp>
      <TimeAgo date={event.ts} formatter={fuzzyFormatter} />
    </Timestamp>
    <Body>
      <em>{event.user}</em>
      {messages[event.type]}
    </Body>
  </Event>
)

const Event = styled.div`
  border-left: 1px solid navy;
  margin-bottom: 2em;
  padding: 1em 0em 1em 1em;
`

const Body = styled.div`
`;

const Timestamp = styled.div`
  font-size: 0.6em;
  text-align: left;
  font-style: italic;
  margin-bottom: 1em;
`;

const messages = {
  comment: ' has a comment',
  question: ' has a question',
  lost: ' is lost!',
}

const fuzzyFormatter = (value, unit, suffix, date, fallback) => {
  if (unit === 'second') {
    if (value < 30) return 'Just now'
    return (Math.round(value / 10) * 10) + ' seconds ago'
  }
  return fallback()
}
