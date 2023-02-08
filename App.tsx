import { Intro } from './src/Intro'
import { Header } from './src/Header'
import { List } from './src/List'
import { Footer } from './src/Footer'
import { Layout } from './src/Layout'

const App = () => {
  return (
    <Layout>
      <Intro />
      <Header />
      <List comics={[]} />
      <Footer comicCount={0} />
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
