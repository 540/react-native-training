import { ComicRepository } from '../domain/ComicRepository'
import { Api } from 'core/shared/api/infrastructure/api'

export const apiComicRepository = ({ api }: { api: Api }) =>
  ({
    findBy: (characterId: string) => api.comics(characterId)
  } satisfies ComicRepository)
