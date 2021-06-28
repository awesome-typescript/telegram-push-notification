export const createTelegramImageMessage = (imageUrl: string): string => {
  return `
*Image_url*: ${imageUrl}
\n\n
`
}
