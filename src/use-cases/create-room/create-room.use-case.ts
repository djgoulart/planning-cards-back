import { RoomRepositoryInterface } from 'src/domain/room/repository/room.repository'
import { UseCaseInterface } from '../@shared/use-case.interface'
import { CreateRoomInputDto } from './create-room.dto'

export default class CreateRoomUseCase implements UseCaseInterface {
  // eslint-disable-next-line no-useless-constructor
  constructor(private roomRepository: RoomRepositoryInterface) {}

  async execute(data: CreateRoomInputDto): Promise<void> {
    await this.roomRepository.create(data.room)
  }
}
