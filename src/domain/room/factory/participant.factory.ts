import { randomUUID } from 'crypto'
import Participant from '../entities/participants'

export default class ParticipantFactory {
  static create(name: string) {
    return new Participant({
      name,
      id: randomUUID(),
    })
  }
}
