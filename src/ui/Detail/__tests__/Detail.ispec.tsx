import React from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react-native'
import { aComic } from 'core/comic/domain/__tests__/__builders__/comicBuilder'
import { asValue } from '_di/resolvers'
import { render } from 'ui/__tests__/render'
import { Navigation, NavigationParams, RouteName } from 'ui/_navigation/model'
import { mock } from 'jest-mock-extended'
import { Detail } from 'ui/Detail'
import { RouteProp } from '@react-navigation/native'

const COMIC_DETAIL = aComic()

describe('Detail', () => {
  let navigation: ReturnType<Navigation>

  beforeEach(() => {
    navigation = mock<ReturnType<Navigation>>()
  })

  it('shows comic', async () => {
    renderDetail()

    await waitFor(async () => {
      expect(await screen.findByText(COMIC_DETAIL.title)).toBeDefined()
    })
    expect(screen.getByText(COMIC_DETAIL.characters[0])).toBeDefined()
  })

  it('goes to home', async () => {
    renderDetail()

    await waitFor(async () => {
      expect(await screen.findByText(COMIC_DETAIL.title)).toBeDefined()
    })

    await fireEvent.press(await screen.findByText('t-detail.button.back'))

    expect(navigation.goBack).toHaveBeenCalled()
  })

  const renderDetail = () => {
    const useNavigation = () => navigation

    const useRoute = <T extends RouteName>() => ({ params: { comic: COMIC_DETAIL } } as RouteProp<NavigationParams, T>)

    render(<Detail />, {
      useNavigation: asValue(useNavigation),
      useRoute: asValue(useRoute)
    })
  }
})
