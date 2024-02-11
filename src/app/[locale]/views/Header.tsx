'use client'


import logoImg from '@public/flutter-mane.png'
import { Dropdown, theme } from 'antd'
import { Header as AntdHeader } from 'antd/es/layout/layout'
import Image from 'next/image'
import { useState } from 'react'
import { routes } from '@/constants/routes'
import { Link, usePathname } from '@/navigation'
import LocaleSelector from '@app/[locale]/components/LocaleSelector'
import { cn } from '@utils/cn'
import type { FC } from 'react'


type HeaderProps = {
  menuLabels: {
    home: string
    typeChart: string
  }
}


type MenuItem = {
  label: string
  key: keyof typeof routes
}


const Header: FC<HeaderProps> = ({ menuLabels: { home, typeChart } }) => {

  const { token: {
    colorBgElevated,
    borderRadiusLG,
    borderRadiusSM,
    boxShadowSecondary,
    paddingXXS,
    controlPaddingHorizontal,
    paddingContentVerticalSM,
    lineHeight,
    controlItemBgHover,
    motionDurationMid,
    colorBgTextHover,
  } } = theme.useToken()

  const pathname = usePathname()


  const menus: MenuItem[] = [
    {
      key: 'home',
      label: home,
    },
    {
      key: 'typeChart',
      label: typeChart,
    },
  ]


  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false)


  const dropdownMenu = (
    <ul
      className="text-lg font-bold"
      style={{
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        padding: paddingXXS,
      }}
    >
      {menus.map(({ key, label }) => (
        <li key={key}>
          <Link
            className="w-full inline-flex text-white"
            href={routes[key]}
            style={{
              paddingInline: controlPaddingHorizontal,
              paddingBlock: paddingContentVerticalSM,
              borderRadius: borderRadiusSM,
              lineHeight,
            }}
            onClick={() => void setDropdownOpened(false)}
          >
            <span className={cn(pathname === routes[key] && 'gradient-primary text-gradient')}>
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )


  return (
    <AntdHeader className="sticky left-0 top-0 flex items-center justify-between backdrop-blur scope-[#poketool]:p-inline-16 scope-[#poketool]:sm:p-inline-32">
      <div className="flex items-center gap-x-8">
        {pathname !== routes.home && (
          <Image
            alt="logo"
            className="h-72 w-auto translate-y--4"
            quality={100}
            src={logoImg}
          />
        )}
        <Link href={routes.home}>
          <h1 className="gradient-primary text-gradient text-3xl font-bold tracking-2">
            PokeTool
          </h1>
        </Link>
      </div>

      <div className="flex gap-x-12 color-#6a82fb sm:hidden">
        <LocaleSelector />

        <Dropdown
          dropdownRender={() => dropdownMenu}
          open={dropdownOpened}
          trigger={['click']}
          onOpenChange={setDropdownOpened}
        >
          <div
            className={cn(
              'text-4xl p-2 transition-background-color',
              dropdownOpened && 'bg-$hover-color',
            )}
            style={{
              borderRadius: borderRadiusLG,
              transitionDuration: motionDurationMid,
              '--hover-color': colorBgTextHover,
            }}
          >
            <div className="i-solar:hamburger-menu-broken" />
          </div>
        </Dropdown>
      </div>

      <ul className="flex items-center max-sm:hidden">
        {menus.map(({ key, label }) => (
          <li key={key} className="flex items-center">
            <Link
              className={cn(
                'text-white text-lg font-bold p-inline-12 p-block-6 transition-background-color',
                pathname !== routes[key] && 'media-mouse:hover:bg-white/12',
                pathname === routes.home && key === 'home' && 'hidden',
              )}
              href={routes[key]}
              style={{ borderRadius: borderRadiusLG, transitionDuration: motionDurationMid }}
            >
              <span className={cn(pathname === routes[key] && 'gradient-primary text-gradient')}>
                {label}
              </span>
            </Link>
          </li>
        ))}
        <li className="flex items-center">
          <LocaleSelector />
        </li>
      </ul>
    </AntdHeader>
  )
}


export default Header
