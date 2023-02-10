import { ComicRepository } from '../domain/ComicRepository'
import { Comic } from '../domain/comic'

export interface ComicUseCases {
  commonComics: (firstCharacterFilter?: string, secondCharacterFilter?: string) => Promise<Comic[]>
}

export const comicUseCases = ({ comicRepository }: { comicRepository: ComicRepository }) =>
  ({
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
  } satisfies ComicUseCases)
