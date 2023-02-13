import { Comic } from '../../comic'

export const aComic = (...options: Array<Partial<Comic>>) => {
  const _default: Comic = {
    id: 1,
    title: 'title',
    characters: ['characters']
  }

  return Object.assign({}, _default, ...options)
}

export const aComicCollection = (size = 4, options?: Comic) => {
  const _default: Comic[] = []

  for (let i = 0; i < size; i++) {
    _default.push({
      id: i,
      title: `title ${i}`,
      characters: [`characters ${i}`]
    })
  }

  options && _default.push(options)

  return _default
}
