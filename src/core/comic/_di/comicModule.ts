import { ComicUseCases, comicUseCases } from '../useCases/comicUseCases'
import { ComicRepository } from '../domain/comicRepository'
import { apiComicRepository } from '../infrastructure/apiComicRepository'
import { asFunction } from '_di/resolvers'

export const comicModule = {
  comicUseCases: asFunction<ComicUseCases>(comicUseCases),
  comicRepository: asFunction<ComicRepository>(apiComicRepository)
}
