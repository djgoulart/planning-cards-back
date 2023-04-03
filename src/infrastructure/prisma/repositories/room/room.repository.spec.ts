import Room from '@/domain/room/entities/room'
import ParticipantFactory from '@/domain/room/factory/participant.factory'
import RoomFactory from '@/domain/room/factory/room.factory'
import InMemoryRoomRepository from '@/tests/repositories/in-memory-room.repository'

it('Should be able to create an room', async () => {
  const room = RoomFactory.createEmptyRoom('Empty')

  const repository = new InMemoryRoomRepository()

  await repository.create(room)
  const roomCreated = await repository.findById(room.id)

  await expect({
    name: roomCreated.name,
    id: roomCreated.id,
  }).toStrictEqual({
    id: room.id,
    name: room.name,
  })
})

it('should be able to join in a room', async () => {
  const participant = ParticipantFactory.create('Participant')
  const room = new Room({
    participants: [participant],
    name: 'My Room',
  })

  room.joinRoom(participant)
  const roomRepository = new InMemoryRoomRepository()

  await roomRepository.create(room)
  await roomRepository.joinRoom(participant, room.id)

  const roomJoined = await roomRepository.findById(room.id)

  expect(roomJoined.participants).toEqual(room.participants)
})
