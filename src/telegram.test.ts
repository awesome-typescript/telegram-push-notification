import { ConfigurationException } from '@awesome-typescript/exceptions'

import { telegram } from './telegram'

describe('telegram', () => {
  beforeEach(() => {
    delete process.env.TELEGRAM_TOKEN
    delete process.env.TELEGRAM_CHANNEL_ID
  })

  test('should throw an error, if TELEGRAM_TOKEN, TELEGRAM_CHANNEL_ID are missed', () => {
    expect(() => {
      telegram()
    }).toThrow(ConfigurationException)
  })

  test('should throw an error, if TELEGRAM_TOKEN is missed', () => {
    process.env.TELEGRAM_CHANNEL_ID = '1234'
    expect(() => {
      telegram()
    }).toThrow(ConfigurationException)
  })

  test('should throw an error, if TELEGRAM_CHANNEL_ID is missed', () => {
    process.env.TELEGRAM_TOKEN = '1234'
    expect(() => {
      telegram()
    }).toThrow(ConfigurationException)
  })

  test('should not throw an error, if TELEGRAM_TOKEN, TELEGRAM_CHANNEL_ID exist', () => {
    process.env.TELEGRAM_TOKEN = '1234'
    process.env.TELEGRAM_CHANNEL_ID = '1234'

    expect(() => {
      telegram()
    }).not.toThrow(ConfigurationException)
  })
})
