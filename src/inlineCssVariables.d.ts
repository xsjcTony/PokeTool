declare global {
  module 'react' {
    interface CSSProperties {
      [key: `--${string}`]: number | string
    }
  }
}
