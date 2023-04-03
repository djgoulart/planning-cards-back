import Participant from '@/domain/room/entities/participants'
import Room from '@/domain/room/entities/room'
import InMemoryRoomRepository from '../../tests/repositories/in-memory-room.repository'

describe('Leave room use case test', () => {
  it('should be able to leave and existent room', async () => {
    const participant = new Participant({
      name: 'Joe',
      id: '1',
    })
    const room = new Room({
      name: 'Existent room',
      id: '123',
    })

    const repository = new InMemoryRoomRepository()
    await repository.create(room)
    await repository.joinRoom(participant, room.id)

    let roomJoined = await repository.findById(room.id)
    expect(roomJoined.participants.length).toEqual(1)

    repository.leaveRoom(participant.id, room.id)

    roomJoined = await repository.findById(room.id)

    expect(roomJoined.participants.length).toEqual(0)
  })

  it('should not leave from inexistent room', async () => {
    const participant = new Participant({
      name: 'Joe',
      id: '1',
    })
    const room = new Room({
      name: 'Existent room',
      id: '123',
    })

    const repository = new InMemoryRoomRepository()
    await repository.create(room)
    await repository.joinRoom(participant, room.id)

    let roomJoined = await repository.findById(room.id)
    expect(roomJoined.participants.length).toEqual(1)

    repository.leaveRoom(participant.id, 'inexistent-id')

    roomJoined = await repository.findById(room.id)

    expect(roomJoined.participants.length).toEqual(1)
  })
})
