import { RoomRepositoryInterface } from '@/domain/room/repository/room.repository'
import Participant from '@/domain/room/entities/participants'
import client from '../../client'
import Room from '@/domain/room/entities/room'

export default class RoomRepository implements RoomRepositoryInterface {
  async leaveRoom(participantId: string, roomId: string): Promise<void> {
    await client.room.update({
      where: {
        id: roomId,
      },
      data: {
        users: {
          disconnect: {
            id: participantId,
          },
        },
      },
    })
  }

  async findById(id: string): Promise<Room | null> {
    const room = await client.room.findUnique({
      where: {
        id,
      },
      include: {
        users: {},
      },
    })

    if (!room) {
      throw new Error('Room not found')
    }

    return new Room({
      name: room.name,
      id: room.id,
      participants: room.users.map((user) => {
        return new Participant({
          name: user.name,
          id: user.id,
        })
      }),
    })
  }

  async create(data: Room) {
    await client.room.create({
      data: {
        name: data.name,
        id: data.id,
      },
    })
  }

  async joinRoom(participant: Participant, roomId: string) {
    await client.room.update({
      where: {
        id: roomId,
      },
      data: {
        users: {
          connect: {
            id: participant.id,
          },
        },
      },
      include: {
        users: {},
      },
    })
  }
}
