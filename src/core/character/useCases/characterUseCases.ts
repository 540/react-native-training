import { CharacterRepository } from '../domain/CharacterRepository'

export const characterUseCases = (characterRepository: CharacterRepository) => ({
  all: () => characterRepository.all()
})
