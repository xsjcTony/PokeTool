import type { JSX } from 'react'


type AllTypes = {
  name: string
  url: string
}[]


const TypeChart = async (): Promise<JSX.Element> => {

  const allTypes = (await fetch('https://pokeapi.co/api/v2/type')
    .then(async res => await res.json()) as { results: AllTypes })
    .results
    .filter(type => type.name !== 'shadow' && type.name !== 'unknown')


  return (
    <pre>{JSON.stringify(allTypes, null, 2)}</pre>
  )
}


export default TypeChart
