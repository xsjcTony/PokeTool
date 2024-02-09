import { Header as AntdHeader } from 'antd/es/layout/layout'
import Image from 'next/image'
import logoImg from '../../../public/favicon.svg'
import type { FC } from 'react'


const Header: FC = () => (
  <AntdHeader className="flex items-center justify-center gap-x-32 backdrop-blur">
    <Image alt="logo" className="h-48 w-auto" src={logoImg} />
    <h1 className="text-gradient from-#ff4b6b to-#6a82fb bg-gradient-to-r text-3xl font-bold tracking-5">
      PokeTool
    </h1>
  </AntdHeader>
)


export default Header
