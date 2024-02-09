'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logoImg from '../../../public/flutter-mane.png'
import type { FC } from 'react'


const Logo: FC = () => {
  const pathname = usePathname()

  return pathname !== '/' && <Image alt="logo" className="h-72 w-auto translate-y--4" src={logoImg} />
}


export default Logo
