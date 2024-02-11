import './globals.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Footer from '@app/[locale]/views/Footer'
import Header from '@app/[locale]/views/Header'
import AntdGlobalConfig from '@theme/antd'
import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'


type RouteSegment = { params: { locale: string } }


// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'PokeTool',
  description: 'Simple but fancy pokemon utilities',
  icons: { icon: '/pokeball.svg' },
}


const RootLayout: FC<PropsWithChildren<RouteSegment>> = ({
  params: { locale },
  children,
}) => {
  const t = useTranslations()

  return (
    <html lang={locale}>
      <body className={inter.className} id="poketool">
        <Image
          fill
          alt="background"
          className="pointer-events-none z--1 object-cover object-r opacity-10"
          quality={100}
          src="/bg.jpg"
        />

        <AntdRegistry>
          <AntdGlobalConfig>
            <Layout className="scope-[#poketool]:min-h-100vh">
              <Header
                menuLabels={{
                  home: t('nav.home'),
                  typeChart: t('nav.typeChart'),
                }}
              />
              <Content className="flex items-center">
                <div className="mx-auto max-w-1280 w-full p-20 sm:p-40">
                  {children}
                </div>
              </Content>
              <Footer
                copyrightText={t('footer.copyright')}
                presentText={t('footer.present')}
              />
            </Layout>
          </AntdGlobalConfig>
        </AntdRegistry>
      </body>
    </html>
  )
}


export default RootLayout
