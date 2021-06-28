# Telegram Push Notification
## How to Set Environment Variables

#### Environment Variables
```
TELEGRAM_TOKEN={{your_telegram_token}}
TELEGRAM_CHANNEL_ID={{your_telegram_channel_id}}
```

## How to use
```ts
import { telegram } from './telegram'

const telegramBot = telegram()

await telegramBot.pushInfoMessage('send message ...')
await telegramBot.pushErrorMessage('send message ...')
await telegramBot.pushImageMessage('http://google.com/image1.png')
```
