import TelegramBot from 'node-telegram-bot-api'

import { TelegramPushMessageException } from '../exceptions'

import { pushInfoMessage } from './push-info-message'

describe('push-info-message', () => {
  const telegramToken = '{{token}}'
  const telegramChannelId = '{{telegramChannelId}}'
  const telegrafInstance = new TelegramBot('{{token}}')
  let telegram: {
    (argument0: string): any // eslint-disable-line @typescript-eslint/no-explicit-any
    (message: string): Promise<void>
  }

  beforeEach(() => {
    telegram = pushInfoMessage(
      telegrafInstance,
      telegramToken,
      telegramChannelId,
    )
  })

  test('should throw an error, if "TOKEN" or "CHANNEL_ID" are wrong', async () => {
    try {
      await telegram('send message ...')
    } catch (error) {
      expect(error.name).toBe(TelegramPushMessageException.name)
      expect(error.message).toBe('ETELEGRAM: 404 Not Found')
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')
    }
  })
})
