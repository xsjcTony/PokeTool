import Image from 'next/image'
import flutterManeShinyImg from '../../public/flutter-mane-shiny.png'
import pokeBallImg from '../../public/pokeball.svg'
import type { FC } from 'react'


const Home: FC = () => (
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
          ✨Simple
          <br className="sm:hidden" />
          <span className="max-sm:hidden">&nbsp;</span>
          & Fancy
        </span>
      </span>
      <span>
        P
        <Image
          alt="pokeball"
          className="inline h-1em w-1em translate-y--4"
          quality={100}
          src={pokeBallImg}
        />
        kemon
        <br className="sm:hidden" />
        <span className="max-sm:hidden">&nbsp;</span>
        ️Utilities
      </span>
    </h2>
  </div>
)


export default Home
