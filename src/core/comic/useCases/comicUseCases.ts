import { ComicRepository } from '../domain/ComicRepository'

export const comicUseCases = (comicRepository: ComicRepository) => ({
  commonComics: async (firstCharacterFilter?: string, secondCharacterFilter?: string) => {
    if (firstCharacterFilter === undefined || secondCharacterFilter === undefined) {
      return []
    }

    const [firstCharacterComics, secondCharacterComics] = await Promise.all([
      comicRepository.findBy(firstCharacterFilter),
      comicRepository.findBy(secondCharacterFilter)
    ])

    return firstCharacterComics.filter(comic1 => secondCharacterComics.some(comic2 => comic1.id === comic2.id))
  }
})
