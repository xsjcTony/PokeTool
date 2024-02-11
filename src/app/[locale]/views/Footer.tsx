import { Footer as AntdFooter } from 'antd/es/layout/layout'
import Text from 'antd/es/typography/Text'
import type { FC } from 'react'


type FooterProps = {
  copyrightText: string
  presentText: string
}


const Footer: FC<FooterProps> = ({ copyrightText, presentText }) => (
  <AntdFooter className="text-center">
    <Text type="secondary">
      {copyrightText} © 2024-{presentText}&nbsp;
      <span className="gradient-name text-gradient font-bold">
        ❤Aelita❤
      </span>
    </Text>
  </AntdFooter>
)


export default Footer
