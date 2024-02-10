'use client'


import { MenuOutlined } from '@ant-design/icons'
import { Dropdown, theme } from 'antd'
import { Header as AntdHeader } from 'antd/es/layout/layout'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { routes } from '@/constants/routes'
import { cn } from '@utils/cn'
import logoImg from '../../../public/flutter-mane.png'
import type { FC } from 'react'


type MenuItem = {
  label: string
  key: keyof typeof routes
}


const menus: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'typeChart',
    label: 'Type Chart',
  },
]


const Header: FC = () => {

  const { token: {
    colorBgElevated,
    borderRadiusLG,
    boxShadowSecondary,
    paddingXXS,
    controlPaddingHorizontal,
    paddingContentVerticalSM,
    lineHeight,
    motionDurationMid,
  } } = theme.useToken()

  const pathname = usePathname()


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
        <li
          key={key}
          style={{
            paddingInline: controlPaddingHorizontal,
            paddingBlock: paddingContentVerticalSM,
            lineHeight,
          }}
        >
          <Link
            className={cn(
              'text-white',
              pathname === routes[key] && 'gradient-primary text-gradient',
            )}
            href={routes[key]}
            onClick={() => void setDropdownOpened(false)}
          >
            {label}
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

      <Dropdown
        dropdownRender={() => dropdownMenu}
        open={dropdownOpened}
        trigger={['click']}
        onOpenChange={setDropdownOpened}
      >
        <MenuOutlined className="text-3xl scope-[#poketool]:color-#6a82fb scope-[#poketool]:sm:hidden" />
      </Dropdown>

      <ul className="flex max-sm:hidden">
        {menus.map(({ key, label }) => (
          <li
            key={key}
            className={cn(
              'text-lg font-bold p-inline-8 p-block-4 transition-background-color',
              pathname === routes[key]
                ? 'gradient-primary text-gradient'
                : 'media-mouse:hover:bg-white/12',
              pathname === routes.home && key === 'home' && 'hidden',
            )}
            style={{ borderRadius: borderRadiusLG, transitionDuration: motionDurationMid }}
          >
            <Link className="text-white" href={routes[key]}>{label}</Link>
          </li>
        ))}
      </ul>
    </AntdHeader>
  )
}


export default Header
