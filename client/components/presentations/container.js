import React from 'react'

import Presentation from './presentation'

export default class PresentationContainer extends React.Component {
  state = {
    events: [],
  }

  componentDidMount() {
    const socket = this.socket = io.connect('http://localhost:3001')

    socket.on('user-event', this.recordEvent)
  }

  recordEvent = payload => this.setState({
    events: [payload].concat(this.state.events),
  })

  componentWillUnmount() {
    if (this.socket) this.socket.close()
  }

  render() {
    return (
      <Presentation events={this.state.events} />
    )
  }
}
