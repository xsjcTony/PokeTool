import { Header as AntdHeader } from 'antd/es/layout/layout'
import Logo from '@app/components/Logo'
import type { FC } from 'react'


const Header: FC = () => (
  <AntdHeader className="sticky left-0 top-0 flex items-center justify-center gap-x-32 backdrop-blur">
    <Logo />
    <h1 className="from-#ff4b6b to-#6a82fb bg-gradient-to-r text-gradient text-3xl font-bold tracking-5">
      PokeTool
    </h1>
  </AntdHeader>
)


export default Header
