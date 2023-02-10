import { Character } from '../domain/character'
import { CharacterRepository } from '../domain/CharacterRepository'

export interface CharacterUseCases {
  all: () => Promise<Character[]>
}

export const characterUseCases = ({ characterRepository }: { characterRepository: CharacterRepository }) =>
  ({
    all: () => characterRepository.all()
  } satisfies CharacterUseCases)
