import { Intro } from './Intro'
import { Header } from './Header'
import { List } from './List'
import { Footer } from './Footer'
import { Layout } from './Layout'
import { useState } from 'react'
import { api } from '../api'
import { useQuery } from 'react-query'
import { ActivityIndicator, StyleSheet } from 'react-native'

const fetchComics = async (firstCharacterFilter: string, secondCharacterFilter: string) => {
  if (firstCharacterFilter === undefined || secondCharacterFilter === undefined) {
    return []
  }

  const [firstCharacterComics, secondCharacterComics] = await Promise.all([
    api.comics(firstCharacterFilter, 3),
    api.comics(secondCharacterFilter, 3)
  ])

  const commonComics = firstCharacterComics.filter(comic1 =>
    secondCharacterComics.some(comic2 => comic1.id === comic2.id)
  )

  return commonComics
}

export const Home = () => {
  const [firstCharacterFilter, setFirstCharacterFilter] = useState<string | undefined>(undefined)
  const [secondCharacterFilter, setSecondCharacterFilter] = useState<string | undefined>(undefined)

  const { data: characters } = useQuery('characters', api.characters, { initialData: [] })
  const {
    data: comics,
    isFetching: isFetchingComics,
    remove: clearComics
  } = useQuery(
    ['comics', firstCharacterFilter, secondCharacterFilter],
    () => fetchComics(firstCharacterFilter, secondCharacterFilter),
    { initialData: [] }
  )

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
          clearComics()
          setFirstCharacterFilter(undefined)
          setSecondCharacterFilter(undefined)
        }}
      />
      {isFetchingComics ? <ActivityIndicator style={styles.loader} size="large" /> : <List comics={comics} />}
      <Footer comicCount={comics.length} />
    </Layout>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1
  }
})
