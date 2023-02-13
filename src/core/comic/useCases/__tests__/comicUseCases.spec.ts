import { ComicRepository } from 'core/comic/domain/ComicRepository'
import { comicUseCases } from 'core/comic/useCases/comicUseCases'
import { mock } from 'jest-mock-extended'
import { aComic, aComicCollection } from 'core/comic/domain/__tests__/__builders__/ComicBuilder'

describe('Comic use cases', () => {
  it('returns no comics for no comics available', async () => {
    const comicRepository = mock<ComicRepository>()
    comicRepository.findBy.mockResolvedValue([])

    const comics = await comicUseCases({ comicRepository }).commonComics('character0', 'character1')

    expect(comics).toHaveLength(0)
  })

  it('returns no comics for no common comics', async () => {
    const comicRepository = mock<ComicRepository>()
    comicRepository.findBy.mockResolvedValueOnce([aComic({ id: 0 }), aComic({ id: 1 })])
    comicRepository.findBy.mockResolvedValueOnce([aComic({ id: 2 }), aComic({ id: 3 })])

    const comics = await comicUseCases({ comicRepository }).commonComics('character0', 'character1')

    expect(comics).toHaveLength(0)
  })

  it('returns common comics for common comics', async () => {
    const comicRepository = mock<ComicRepository>()
    comicRepository.findBy.mockResolvedValueOnce([aComic({ id: 0 }), aComic({ id: 1 })])
    comicRepository.findBy.mockResolvedValueOnce([aComic({ id: 1 }), aComic({ id: 2 })])

    const comics = await comicUseCases({ comicRepository }).commonComics('character0', 'character1')

    expect(comics).toHaveLength(1)
  })

  it('returns no comics for no characters', async () => {
    const comicRepository = mock<ComicRepository>()
    comicRepository.findBy.mockResolvedValueOnce(aComicCollection())

    const comics = await comicUseCases({ comicRepository }).commonComics('character0', undefined)

    expect(comics).toHaveLength(0)
  })
})
