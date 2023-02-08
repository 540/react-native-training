import {useState} from "react"
import {Intro} from "./src/Intro"
import {Header} from "./src/Header"
import {List} from "./src/List"
import {Footer} from "./src/Footer"
import {Layout} from "./src/Layout"

const comics = [
  {
    id: 45977,
    title: 'Captain America (2012) #11',
    characters: ['Captain America']
  },
  {
    id: 43722,
    title: 'Captain America (2012) #1',
    characters: ['Captain America']
  },
  {
    id: 40391,
    title: 'Captain America (2011) #18',
    characters: ['Captain America']
  },
  {
    id: 43339,
    title: 'Uncanny Avengers (2012) #1',
    characters: ['Captain America', 'Havok', 'Rogue', 'Scarlet Witch', 'Thor', 'Wolverine']
  }
]

const App = () => {
  const [filter, setFilter] = useState('')
  const filteredComics = comics.filter(comic => comic.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <Layout>
      <Intro />
      <Header onFilter={setFilter} onClear={() => setFilter('')} filter={filter} />
      <List comics={filteredComics} />
      <Footer comicCount={filteredComics.length} />
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
