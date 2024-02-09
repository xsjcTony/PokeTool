import clsx from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'
import type { ClassValidator } from 'tailwind-merge'


const isUnoFontSize: ClassValidator = (className: string) => /^[0-9]+$/.test(className)


const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [isUnoFontSize] }],
    },
  },
})


export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs))
