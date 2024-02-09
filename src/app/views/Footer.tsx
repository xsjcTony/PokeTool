import { Footer as AntdFooter } from 'antd/es/layout/layout'
import Text from 'antd/es/typography/Text'
import type { FC } from 'react'


const Footer: FC = () => (
  <AntdFooter className="text-center">
    <Text type="secondary">
      Copyright © 2024-present&nbsp;
      <span className="text-gradient from-#eecda3 to-#ef629f bg-gradient-linear bg-gradient-shape-[315deg] font-bold">
        ❤Aelita❤
      </span>
    </Text>
  </AntdFooter>
)


export default Footer
