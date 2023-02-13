import { CharacterRepository } from '../../domain/characterRepository'
import { aCharacterCollection } from '../../domain/__tests__/__builders__/CharacterBuilder'
import { mock } from 'jest-mock-extended'
import { characterUseCases } from '../characterUseCases'

describe('Character use case', () => {
  it('returns all characters', async () => {
    const characterRepository = mock<CharacterRepository>()
    characterRepository.all.mockResolvedValue(aCharacterCollection())

    const characters = await characterUseCases({ characterRepository }).all()

    expect(characters).toEqual(aCharacterCollection())
  })

  it('returns no characters', async () => {
    const characterRepository = mock<CharacterRepository>()
    characterRepository.all.mockResolvedValue([])

    const characters = await characterUseCases({ characterRepository }).all()

    expect(characters).toHaveLength(0)
  })
})
