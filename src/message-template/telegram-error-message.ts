export const createTelegramErrorMessage = (error: Error): string => {
  const date = new Date()?.toISOString() || '-'
  const name = error?.name?.toString() || '-'
  const message = error?.message?.toString() || '-'
  const stack = error?.stack?.toString() || '-'

  return `
*Date time*: ${date}
*Error name*: ${name}
*Error message*: ${message}
*Stack*: ${stack}
\n\n
`.toString()
}
