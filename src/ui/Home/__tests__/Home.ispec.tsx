import React from 'react'
import { fireEvent, screen } from '@testing-library/react-native'
import { Home } from '../Home'
import { aCharacterCollection } from 'core/character/domain/__tests__/__builders__/characterBuilder'
import { aComicCollection } from 'core/comic/domain/__tests__/__builders__/comicBuilder'
import { mock } from 'jest-mock-extended'
import { ComicUseCases } from 'core/comic/useCases/comicUseCases'
import { CharacterUseCases } from 'core/character/useCases/characterUseCases'
import { asValue } from '_di/resolvers'
import { render } from 'ui/__tests__/render'

describe('Home', () => {
  it('shows common comics', async () => {
    const comicUseCases = mock<ComicUseCases>()
    const characterUseCases = mock<CharacterUseCases>()
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue(aComicCollection())
    render(<Home />, {
      characterUseCases: asValue(characterUseCases),
      comicUseCases: asValue(comicUseCases)
    })
    await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)

    expect(await screen.findByText(aComicCollection()[0].title)).toBeDefined()
  })

  it('shows total comicCount for common comics', async () => {
    const comicUseCases = mock<ComicUseCases>()
    const characterUseCases = mock<CharacterUseCases>()
    jest.spyOn(characterUseCases, 'all').mockResolvedValue(aCharacterCollection())
    jest.spyOn(comicUseCases, 'commonComics').mockResolvedValue(aComicCollection())
    render(<Home />, {
      characterUseCases: asValue(characterUseCases),
      comicUseCases: asValue(comicUseCases)
    })

    await fireEvent(await screen.findByTestId('firstCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)
    await fireEvent(await screen.findByTestId('secondCharacterSelect'), 'onValueChange', aCharacterCollection()[0].id)

    expect(await screen.findByText('t-home.comic.count#comicCount:4')).toBeDefined()
  })
})
