import flutterManeShinyImg from '@public/flutter-mane-shiny.png'
import pokeBallImg from '@public/pokeball.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'


const Home: FC = () => {
  const t = useTranslations('home')

  return (
    <div className="flex flex-col items-center gap-y-20 sm:gap-y-50">
      <Image
        alt="Flutter Mane"
        className="max-sm:max-w-320"
        quality={100}
        src={flutterManeShinyImg}
      />

      <h2 className="flex flex-col text-center text-5xl font-bold leading-normal">
        <span>
          <span className="gradient-primary text-gradient">
            ✨{t('simple')}
            <br className="sm:hidden" />
            <span className="max-sm:hidden">&nbsp;</span>
            & {t('fancy')}
          </span>
        </span>
        <span>
          P
          <Image
            alt="pokeball"
            className="inline w-.8em translate-y--1"
            quality={100}
            src={pokeBallImg}
          />
          kemon
          <br className="sm:hidden" />
          <span className="max-sm:hidden">&nbsp;</span>
          {t('utilities')}
        </span>
      </h2>
    </div>
  )
}


export default Home
