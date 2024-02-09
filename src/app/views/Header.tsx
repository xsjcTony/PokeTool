'use client'

import { Header as AntdHeader } from 'antd/es/layout/layout'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { routes } from '@/constants/routes'
import logoImg from '../../../public/flutter-mane.png'
import type { FC } from 'react'


const Header: FC = () => {
  const pathname = usePathname()

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
        <h1 className="from-#ff4b6b to-#6a82fb bg-gradient-to-r text-gradient text-3xl font-bold tracking-2">
          PokeTool
        </h1>
      </div>

      <div>Menu WIP🛠️</div>
    </AntdHeader>
  )
}


export default Header
