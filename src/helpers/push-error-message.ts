import TelegramBot from 'node-telegram-bot-api'

import { TelegramPushMessageException } from '../exceptions'

export const pushErrorMessage =
  (
    TelegrafInstance: TelegramBot,
    telegramToken: string,
    telegramChannelId: string,
  ) =>
  async (message: string): Promise<void> => {
    try {
      const bot = new TelegramBot(telegramToken, { polling: false })

      await bot.sendMessage(telegramChannelId, message)
    } catch (error: any) {
      throw new TelegramPushMessageException(error.message, error)
    }
  }
