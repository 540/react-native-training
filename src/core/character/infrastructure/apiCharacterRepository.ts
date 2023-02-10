import { CharacterRepository } from '../domain/CharacterRepository'
import { Api } from 'core/shared/api/infrastructure/api'

export class ApiCharacterRepository implements CharacterRepository {
  private api: Api

  constructor({ api }: { api: Api }) {
    this.api = api
  }

  all = () => this.api.characters()
}
