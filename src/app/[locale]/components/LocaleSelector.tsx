'use client'


import Icon from '@ant-design/icons'
import { Button, Dropdown, theme } from 'antd'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { usePathname, useRouter } from '@/navigation'
import { cn } from '@utils/cn'
import type { locales as _locales } from '@/i18nSharedConfigs'
import type { FC } from 'react'


type LocaleItem = {
  label: string
  key: typeof _locales[number]
  flag: string
}


const locales: LocaleItem[] = [
  {
    key: 'en',
    label: 'English',
    flag: '🇺🇸',
  },
  {
    key: 'zh',
    label: '中文',
    flag: '🇨🇳',
  },
]


const LocaleSelector: FC = () => {

  const { token: {
    colorBgElevated,
    borderRadiusLG,
    borderRadiusSM,
    boxShadowSecondary,
    paddingXXS,
    controlPaddingHorizontal,
    paddingContentVerticalSM,
    lineHeight,
    motionDurationMid,
    controlItemBgHover,
    colorBgTextHover,
  } } = theme.useToken()

  const pathname = usePathname()
  const locale = useLocale()
  const { replace } = useRouter()


  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false)


  const dropdownLocale = (
    <ul
      className="text-lg font-bold"
      style={{
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        padding: paddingXXS,
      }}
    >
      {locales.map(({ key, label, flag }) => (
        <li key={key}>
          <button
            className={cn(
              'transition-background-color w-full inline-flex text-white',
              locale !== key && 'media-mouse:hover:bg-$hover-color',
            )}
            disabled={locale === key}
            style={{
              paddingInline: controlPaddingHorizontal,
              paddingBlock: paddingContentVerticalSM,
              borderRadius: borderRadiusSM,
              lineHeight,
              transitionDuration: motionDurationMid,
              '--hover-color': controlItemBgHover,
            }}
            type="button"
            onClick={() => {
              replace(pathname, { locale: key })
              setDropdownOpened(false)
            }}
          >
            <span className={cn(locale === key && 'gradient-primary text-gradient')}>
              <span className="pie-8">{flag}</span>{label}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )


  return (
    <Dropdown
      dropdownRender={() => dropdownLocale}
      open={dropdownOpened}
      trigger={['hover', 'click']}
      onOpenChange={setDropdownOpened}
    >
      <Button
        icon={<Icon component={() => <div className="i-heroicons:language-16-solid" />} />}
        rootClassName={cn(
          'mis-12',
          dropdownOpened && 'scope-[#poketool]:bg-$hover-color',
        )}
        size="large"
        style={{ '--hover-color': colorBgTextHover }}
        type="text"
      />
    </Dropdown>
  )
}


export default LocaleSelector
