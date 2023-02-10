import { Comic } from './comic'

export interface ComicRepository {
  findBy: (characterId: string) => Promise<Comic[]>
}
