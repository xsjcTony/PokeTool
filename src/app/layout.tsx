import './globals.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Footer from '@app/views/Footer'
import Header from '@app/views/Header'
import AntdGlobalConfig from '@theme/antd'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'


// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'PokeTool',
  description: 'Simple but fancy pokemon utilities',
  icons: { icon: '/flutter-mane.png' },
}


const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className} id="poketool">
      <Image
        fill
        alt="background"
        className="pointer-events-none z--1 object-cover object-r opacity-5"
        quality={100}
        src="/bg.jpg"
      />

      <AntdRegistry>
        <AntdGlobalConfig>
          <Layout className="scope-[#poketool]:min-h-100vh">
            <Header />
            <Content className="flex items-center">
              <div className="mx-auto max-w-1280 w-full p-20 sm:p-40">
                {children}
              </div>
            </Content>
            <Footer />
          </Layout>
        </AntdGlobalConfig>
      </AntdRegistry>
    </body>
  </html>
)


export default RootLayout
