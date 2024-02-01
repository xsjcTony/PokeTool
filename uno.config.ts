import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'


export default defineConfig({
  cli: {
    entry: {
      patterns: ['src/**/*.{ts,tsx}'],
      outFile: '/src/uno.css',
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
