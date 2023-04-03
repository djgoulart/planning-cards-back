import Participant from '@/domain/room/entities/participants'
import Room from '@/domain/room/entities/room'
import { RoomRepositoryInterface } from '@/domain/room/repository/room.repository'

export default class InMemoryRoomRepository implements RoomRepositoryInterface {
  private items: Room[] = []

  leaveRoom(participantId: string, roomId: string): Promise<void> {
    this.items.forEach((room) => {
      room.participants.forEach((participant, index) => {
        if (participant.id === participantId && room.id === roomId) {
          room.participants.splice(index, 1)
        }
      })
    })

    return Promise.resolve()
  }

  findById(id: string): Promise<Room> {
    const finded = this.items.filter((room) => {
      if (room.id === id) {
        return true
      }
      return false
    })[0]

    if (!finded) {
      throw new Error('Room not found')
    }

    return Promise.resolve(
      new Room({
        name: finded.name,
        id: finded.id,
        participants: finded.participants.map((participant) => {
          return new Participant({
            name: participant.name,
            id: participant.id,
          })
        }),
      }),
    )
  }

  async create(data: Room) {
    await this.items.push(data)
  }

  async joinRoom(participant: Participant, roomId: string) {
    this.items.forEach((room) => {
      if (room.id === roomId) {
        room.participants.push(participant)
      }
    })
  }
}
