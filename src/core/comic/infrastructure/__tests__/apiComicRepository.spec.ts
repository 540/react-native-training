import { mock } from 'jest-mock-extended'
import { Api } from 'core/shared/api/infrastructure/api'
import { aComic } from '../../domain/__tests__/__builders__/ComicBuilder'
import { apiComicRepository } from '../apiComicRepository'

describe('Comic repository', () => {
  it('returns a comic', async () => {
    const api = mock<Api>()
    api.comics.mockResolvedValue(aComic())

    const comic = await apiComicRepository({ api }).findBy('1')

    expect(api.comics).toHaveBeenCalledWith('1')
    expect(comic).toEqual(aComic())
  })
})
