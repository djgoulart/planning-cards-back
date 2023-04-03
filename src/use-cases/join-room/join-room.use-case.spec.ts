import Participant from '@/domain/room/entities/participants'
import RoomFactory from '@/domain/room/factory/room.factory'
import InMemoryRoomRepository from '@/tests/repositories/in-memory-room.repository'
import { JoinRoomInputDto } from './join-room.dto'
import { JoinRoomUseCase } from './join-room.use-case'

it('Should be able to join in an existing room', async () => {
  const participant = new Participant({
    name: 'Participant',
    id: '123',
  })

  const room = RoomFactory.createEmptyRoom('My room')
  room.joinRoom(participant)

  const inMemoryRoomRepository = new InMemoryRoomRepository()
  const useCase = new JoinRoomUseCase(inMemoryRoomRepository)

  const input: JoinRoomInputDto = {
    roomId: '123',
    participant,
  }

  await useCase.execute(input)
  await inMemoryRoomRepository.create(room)

  const roomJoined = await inMemoryRoomRepository.findById(room.id)

  expect(roomJoined.participants.length).toEqual(1)
  expect(roomJoined.participants).toEqual([participant])
})
