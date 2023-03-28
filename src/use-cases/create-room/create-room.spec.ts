import RoomRepository from "../../infrastructure/prisma/repositories/room/room.repository";
import { prismaMock } from "../../infrastructure/prisma/singleton"
import  { validRoom } from "../../tests/mocks/repository/room-repository.mock";
import { CreateRoomInputDto } from "./create-room.dto";
import CreateRoomUseCase from "./create-room.use-case";

describe("Create Room use case test", () => {
  it("Should be able to create an room", async () => {

    const useCase = new CreateRoomUseCase(new RoomRepository());
    
    const input: CreateRoomInputDto = {
      room: validRoom,
    };

    prismaMock.room.update.mockResolvedValue(validRoom)

    const output = await useCase.execute(input);

    expect(output.room.id).toEqual(validRoom.id);
  });
});
