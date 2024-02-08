import { Header as AntdHeader } from 'antd/es/layout/layout'
import Image from 'next/image'
import logoImg from '../../../public/favicon.svg'
import type { FC } from 'react'


const Header: FC = () => (
  <AntdHeader
    className="flex items-center backdrop-blur scope-[#poketool]:px-16 scope-[#poketool]:sm:px-32"
  >
    <Image alt="logo" className="mr-16 h-48 w-auto" src={logoImg} />
    <h1
      className="from-#ffc0cb to-#6a82fb bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-5"
      style={{ WebkitTextFillColor: 'transparent' }}
    >
      PokeTool
    </h1>
  </AntdHeader>
)


export default Header
