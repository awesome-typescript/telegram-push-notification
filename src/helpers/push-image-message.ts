import TelegramBot from 'node-telegram-bot-api'

import { createTelegramImageMessage } from '../message-template'
import { TelegramPushMessageException } from '../exceptions'

export const pushImageMessage = (
  TelegrafInstance: TelegramBot,
  telegramToken: string,
  telegramChannelId: string,
) => async (imageUrl: string): Promise<void> => {
  try {
    const bot = new TelegramBot(telegramToken, { polling: false })
    const message = createTelegramImageMessage(imageUrl)

    await bot.sendMessage(telegramChannelId, message)
  } catch (error) {
    throw new TelegramPushMessageException(error.message, error)
  }
}
