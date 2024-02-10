import { Footer as AntdFooter } from 'antd/es/layout/layout'
import Text from 'antd/es/typography/Text'
import type { FC } from 'react'


const Footer: FC = () => (
  <AntdFooter className="text-center">
    <Text type="secondary">
      Copyright © 2024-present&nbsp;
      <span className="gradient-name text-gradient font-bold">
        ❤Aelita❤
      </span>
    </Text>
  </AntdFooter>
)


export default Footer
