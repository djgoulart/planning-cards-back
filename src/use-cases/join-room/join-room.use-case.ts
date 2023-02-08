import { UseCaseInterface } from "../@shared/use-case.interface";
import { JoinRoomInputDto, JoinRoomOutputDto } from "./join-room.dto";

export class JoinRoomUseCase implements UseCaseInterface {
  execute(data: JoinRoomInputDto): JoinRoomOutputDto {
    throw new Error("Method not implemented.");
  }
}
