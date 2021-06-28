import TelegramBot from 'node-telegram-bot-api'
import { ConfigurationException } from '@awesome-typescript/exceptions'

import { pushImageMessage, pushInfoMessage, pushErrorMessage } from './helpers'
import telegramBot from './configs/telegram-bot.json'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const telegram = () => {
  const telegramToken = process.env.TELEGRAM_TOKEN ?? telegramBot.token ?? ''

  if (!telegramToken) {
    throw new ConfigurationException('TELEGRAM_TOKEN')
  }

  if (telegramToken.length <= 3) {
    throw new ConfigurationException('TELEGRAM_TOKEN')
  }

  const telegramChannelId =
    process.env.TELEGRAM_CHANNEL_ID ?? telegramBot.channelId ?? ''

  if (!telegramChannelId) {
    throw new ConfigurationException('TELEGRAM_CHANNEL_ID')
  }

  if (telegramChannelId.length <= 3) {
    throw new ConfigurationException('TELEGRAM_CHANNEL_ID')
  }

  const TelegrafInstance = new TelegramBot(telegramToken, { polling: false })

  return {
    pushInfoMessage: pushInfoMessage(
      TelegrafInstance,
      telegramToken,
      telegramChannelId,
    ),
    pushErrorMessage: pushErrorMessage(
      TelegrafInstance,
      telegramToken,
      telegramChannelId,
    ),
    pushGyazoMessage: pushImageMessage(
      TelegrafInstance,
      telegramToken,
      telegramChannelId,
    ),
  }
}
