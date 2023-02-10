import { Character } from './character'

export interface CharacterRepository {
  all: () => Promise<Character[]>
}
