import type * as messages from '../i18n/en.json'


type Messages = typeof messages

declare global {
  interface IntlMessages extends Messages {}
}
