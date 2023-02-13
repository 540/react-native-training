import { aCharacterCollection } from '../../domain/__tests__/__builders__/CharacterBuilder'
import { mock } from 'jest-mock-extended'
import { Api } from 'core/shared/api/infrastructure/api'
import { ApiCharacterRepository } from '../apiCharacterRepository'

describe('Character repository', () => {
  it('returns all characters', async () => {
    const api = mock<Api>()
    api.characters.mockResolvedValue(aCharacterCollection())

    const characters = await new ApiCharacterRepository({ api }).all()

    expect(characters).toEqual(aCharacterCollection())
  })

  it('returns no characters', async () => {
    const api = mock<Api>()
    api.characters.mockResolvedValue([])

    const characters = await new ApiCharacterRepository({ api }).all()

    expect(characters).toHaveLength(0)
  })
})
