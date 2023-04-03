import { RoomRepositoryInterface } from '@/domain/room/repository/room.repository'
import { UseCaseInterface } from '../@shared/use-case.interface'
import { JoinRoomInputDto } from './join-room.dto'

export class JoinRoomUseCase implements UseCaseInterface {
  private readonly roomRepository: RoomRepositoryInterface

  constructor(roomRepository: RoomRepositoryInterface) {
    this.roomRepository = roomRepository
  }

  async execute(data: JoinRoomInputDto): Promise<void> {
    await this.roomRepository.joinRoom(data.participant, data.roomId)
  }
}
