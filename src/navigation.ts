import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from '@/i18nSharedConfigs'


export const {
  Link,
  usePathname,
  redirect,
  useRouter,
  permanentRedirect,
} = createSharedPathnamesNavigation({
  locales,
})
