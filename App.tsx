import { Intro } from './src/Intro'
import { Header } from './src/Header'
import { List } from './src/List'
import { Footer } from './src/Footer'
import { Layout } from './src/Layout'
import { useEffect, useState } from 'react'
import { api, Character, Comic } from './api'

const App = () => {
  const [comics, setComics] = useState<Comic[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [firstCharacterFilter, setFirstCharacterFilter] = useState<string | undefined>(undefined)
  const [secondCharacterFilter, setSecondCharacterFilter] = useState<string | undefined>(undefined)

  useEffect(() => {
    const fetchCharacters = async () => {
      setCharacters(await api.characters())
    }

    fetchCharacters()
  }, [])

  useEffect(() => {
    const fetchComics = async () => {
      if (firstCharacterFilter === undefined || secondCharacterFilter === undefined) {
        return
      }

      const [firstCharacterComics, secondCharacterComics] = await Promise.all([
        api.comics(firstCharacterFilter),
        api.comics(secondCharacterFilter)
      ])

      const commonComics = firstCharacterComics.filter(comic1 =>
        secondCharacterComics.some(comic2 => comic1.id === comic2.id)
      )

      setComics(commonComics)
    }

    fetchComics()
  }, [firstCharacterFilter, secondCharacterFilter])

  return (
    <Layout>
      <Intro />
      <Header
        characters={characters}
        firstCharacterFilter={firstCharacterFilter}
        secondCharacterFilter={secondCharacterFilter}
        onChangeFirstCharacter={setFirstCharacterFilter}
        onChangeSecondCharacter={setSecondCharacterFilter}
        onClear={() => {
          setComics([])
          setFirstCharacterFilter(undefined)
          setSecondCharacterFilter(undefined)
        }}
      />
      <List comics={comics} />
      <Footer comicCount={comics.length} />
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
