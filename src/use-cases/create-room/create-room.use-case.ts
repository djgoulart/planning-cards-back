import { RoomRepositoryInterface } from "src/domain/room/repository/room.repository";
import { UseCaseInterface } from "../@shared/use-case.interface";
import { CreateRoomInputDto, CreateRoomOutputDto } from "./create-room.dto";

export default class CreateRoomUseCase implements UseCaseInterface {
  constructor(private roomRepository: RoomRepositoryInterface) {}

  async execute(data: CreateRoomInputDto): Promise<CreateRoomOutputDto> {
    const room = await this.roomRepository.create(data.room);

    return {
      room,
    };
  }
}
