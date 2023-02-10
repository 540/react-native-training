import characters from './content/characters.json'
import comics1009220 from './content/comics-1009220.json'
import comics1009351 from './content/comics-1009351.json'
import comics1009368 from './content/comics-1009368.json'
import comics1009610 from './content/comics-1009610.json'
import comics1009664 from './content/comics-1009664.json'
import comics1009718 from './content/comics-1009718.json'

export const api = (delaySeconds = 0) =>
  ({
    characters: async () => characters as CharacterDto[],

    comics: async (characterId: string) =>
      new Promise<ComicDto[]>(resolve =>
        setTimeout(() => {
          const comics = { comics1009220, comics1009351, comics1009368, comics1009610, comics1009664, comics1009718 }

          resolve(comics[`comics${characterId}`] as ComicDto[])
        }, delaySeconds * 1000)
      )
  } satisfies Api)

export interface Api {
  characters: () => Promise<CharacterDto[]>
  comics: (characterId: string) => Promise<ComicDto[]>
}

export interface CharacterDto {
  id: number
  name: string
}

export interface ComicDto {
  id: number
  title: string
  characters: string[]
}
