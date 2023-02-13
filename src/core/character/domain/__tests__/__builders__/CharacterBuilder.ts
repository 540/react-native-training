import { Character } from '../../character'

export const aCharacter = (...options: Array<Partial<Character>>) => {
  const _default: Character = {
    id: 1,
    name: 'character'
  }

  return Object.assign({}, { ..._default, ...options })
}

export const aCharacterCollection = (items = 4, ...options: Array<Partial<Character>>) => {
  const _default: Character[] = []

  for (let i = 0; i < items; i++) {
    _default.push({
      id: i,
      name: `character ${i}`,
      ...options
    })
  }

  return _default
}
