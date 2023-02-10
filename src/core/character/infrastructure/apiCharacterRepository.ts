import { CharacterRepository } from '../domain/CharacterRepository'
import { Api } from '../../shared/api/infrastructure/api'

export const apiCharacterRepository = (api: Api) =>
  ({
    all: () => api.characters()
  } satisfies CharacterRepository)
