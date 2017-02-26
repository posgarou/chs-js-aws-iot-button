'use strict'

require('dotenv').load()

const Consumer = require('sqs-consumer')
const bus = require('./bus')

console.log(process.env.QUEUE_URL)

function ClickProcessor() {
  return Consumer.create({
    queueUrl: process.env.QUEUE_URL,
    region: 'us-east-1',
    handleMessage: (message, done) => {
      const payload = JSON.parse(message.Body)
      console.log('message', payload)
      const { serialNumber, batteryVoltage, clickType } = payload

      done()

      bus.emit(clickType, { user: 'Charleston JS' })
    },
  })
}

const app = module.exports = ClickProcessor()
console.log(app)
