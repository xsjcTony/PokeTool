'use client'


import { ConfigProvider, theme } from 'antd'
import type { FC, PropsWithChildren } from 'react'


const AntdGlobalConfig: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider
    theme={{
      cssVar: true,
      hashed: false,
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#ff4b6b',
        colorLinkHover: '#ffffff',
        colorLinkActive: '#ffffff',
      },
      components: {
        Layout: {
          headerBg: 'transparent',
          bodyBg: 'transparent',
          footerBg: 'transparent',
          headerHeight: 80,
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
)


export default AntdGlobalConfig
