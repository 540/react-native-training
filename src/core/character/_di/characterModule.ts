import { ApiCharacterRepository } from '../infrastructure/apiCharacterRepository'
import { CharacterRepository } from '../domain/CharacterRepository'
import { characterUseCases, CharacterUseCases } from '../useCases/characterUseCases'
import { asClass, asFunction } from '_di/resolvers'

export const characterModule = {
  characterUseCases: asFunction<CharacterUseCases>(characterUseCases),
  characterRepository: asClass<CharacterRepository>(ApiCharacterRepository)
}
