import { RoomRepositoryInterface } from "@/domain/room/repository/room.repository";
import { UseCaseInterface } from "../@shared/use-case.interface";
import { JoinRoomInputDto, JoinRoomOutputDto } from "./join-room.dto";

export class JoinRoomUseCase implements UseCaseInterface {
  constructor(private readonly roomRepository: RoomRepositoryInterface) {}

  async execute(data: JoinRoomInputDto): Promise<JoinRoomOutputDto> {
    const room = await this.roomRepository.joinRoom(data.participant, data.roomId)
    return {
      room
    }
  }
}
