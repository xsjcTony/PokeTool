import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/i18nSharedConfigs'


export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale))
    notFound()


  return { messages: (await import(`../i18n/${locale}.json`)).default }
})
