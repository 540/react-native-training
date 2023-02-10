import { ComicRepository } from '../domain/ComicRepository'
import { Api } from '../../shared/api/infrastructure/api'

export const apiComicRepository = (api: Api) =>
  ({
    findBy: (characterId: string) => api.comics(characterId)
  } satisfies ComicRepository)
