require('dotenv').load()

const { PORT = 3001 } = process.env

const io = require('socket.io')()
const bus = require('./bus')

const clients = new Set()

const queue = require('./worker')

io.on('connection', function(client) {
  clients.add(client)

  client.on('disconnect', function() {
    clients.delete(client)
  })
})

const notify = type => payload => {
  const msg = Object.assign({
    type,
    ts: Date.now(),
  }, payload)

  for (let client of clients) {
    client.emit('user-event', msg)
  }
}

bus.on('SINGLE', notify('comment'))
bus.on('DOUBLE', notify('question'))
bus.on('LONG', notify('lost'))

io.listen(PORT)
queue.start()
