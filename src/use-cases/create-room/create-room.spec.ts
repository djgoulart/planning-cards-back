import Room from '@/domain/room/entities/room'
import InMemoryRoomRepository from '../../tests/repositories/in-memory-room.repository'
import { CreateRoomInputDto } from './create-room.dto'
import CreateRoomUseCase from './create-room.use-case'

describe('Create Room use case test', () => {
  it('Should be able to create an room', async () => {
    const useCase = new CreateRoomUseCase(new InMemoryRoomRepository())

    const room = new Room({
      name: 'Valid room',
      id: '123',
    })

    const input: CreateRoomInputDto = {
      room,
    }

    expect(useCase.execute(input)).resolves.not.toThrow()
  })
})
