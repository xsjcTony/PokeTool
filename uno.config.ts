import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerVariantGroup,
} from 'unocss'


export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    container: { center: true },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': ['48px', '1'],
      '6xl': ['60px', '1'],
      '7xl': ['72px', '1'],
      '8xl': ['96px', '1'],
      '9xl': ['128px', '1'],
    },
  },
  shortcuts: [
    ['text-gradient', ['bg-clip-text', { '-webkit-text-fill-color': 'transparent' }]],
    ['gradient-primary', 'from-#ff4b6b to-#6a82fb bg-gradient-to-r'],
    ['gradient-name', 'from-#eecda3 to-#ef629f bg-gradient-linear bg-gradient-shape-[315deg]'],
  ],
})
