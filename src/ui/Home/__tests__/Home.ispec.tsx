import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react-native'
import { Home } from '../Home'
import { aCharacterCollection } from 'core/character/domain/__tests__/__builders__/characterBuilder'
import { aComic, aComicCollection } from 'core/comic/domain/__tests__/__builders__/comicBuilder'
import { mock } from 'jest-mock-extended'
import { ComicUseCases } from 'core/comic/useCases/comicUseCases'
import { CharacterUseCases } from 'core/character/useCases/characterUseCases'
import { asValue } from '_di/resolvers'
import { render } from 'ui/__tests__/render'
import { Navigation } from 'ui/_navigation/model'

describe('Home', () => {
  let comicUseCases: ComicUseCases
  let characterUseCases: CharacterUseCases
  let navigation: ReturnType<Navigation>

  beforeEach(() => {
    navigation = mock<ReturnType<Navigation>>()
    comicUseCases = mock<ComicUseCases>()
    characterUseCases = mock<CharacterUseCases>()
  })

  it('shows common comics', async () => {
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue(aComicCollection())
    renderHome()

    await waitFor(async () => {
      await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
      await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    })

    expect(await screen.findByText(aComicCollection()[0].title)).toBeDefined()
  })

  it('shows total comicCount for common comics', async () => {
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue(aComicCollection())
    renderHome()

    await waitFor(async () => {
      await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
      await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    })

    expect(await screen.findByText('t-home.comic.count#comicCount:4')).toBeDefined()
  })

  it('shows no commits for no common comics', async () => {
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue([])
    renderHome()

    await waitFor(async () => {
      await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
      await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    })

    await waitFor(() => expect(comicUseCases.commonComics).toHaveBeenCalledTimes(3))
    expect(screen.queryByText('t-home.comic.detail')).toBeNull()
  })

  it('goes to comic detail', async () => {
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue([aComic()])
    renderHome()

    await waitFor(async () => {
      await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
      await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    })
    await fireEvent.press(await screen.findByText('t-home.comic.detail'))

    expect(navigation.navigate).toHaveBeenCalledWith('Detail', { comic: aComic() })
  })

  const renderHome = () => {
    const useNavigation = () => navigation

    render(<Home />, {
      characterUseCases: asValue(characterUseCases),
      comicUseCases: asValue(comicUseCases),
      useNavigation: asValue(useNavigation)
    })
  }
})
