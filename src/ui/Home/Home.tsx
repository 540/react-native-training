import { Intro } from './_components/Intro'
import { Header } from './_components/Header'
import { List } from './_components/List'
import { Footer } from './_components/Footer'
import { Layout } from 'ui/_components/Layout'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { useContainer } from 'ui/_context/diContext'

export const Home = () => {
  const [firstCharacterFilter, setFirstCharacterFilter] = useState<string | undefined>(undefined)
  const [secondCharacterFilter, setSecondCharacterFilter] = useState<string | undefined>(undefined)
  const { characterUseCases, comicUseCases } = useContainer()

  const { data: characters } = useQuery('characters', characterUseCases.all, { initialData: [] })
  const {
    data: comics,
    isFetching: isFetchingComics,
    remove: clearComics
  } = useQuery(
    ['comics', firstCharacterFilter, secondCharacterFilter],
    () => comicUseCases.commonComics(firstCharacterFilter, secondCharacterFilter),
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
