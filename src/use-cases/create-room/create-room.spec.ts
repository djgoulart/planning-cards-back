import RoomFactory from "@/domain/room/factory/room.factory";
import { CreateRoomInputDto } from "./create-room.dto";
import CreateRoomUseCase from "./create-room.use-case";

const roomToCreate = RoomFactory.createEmptyRoom("Empty room");

const roomRepository = {
  create: () => {
    return Promise.resolve(roomToCreate);
  },
};
describe("Create Room use case test", () => {
  it("Should be able to create an room", async () => {
    const useCase = new CreateRoomUseCase(roomRepository);

    const input: CreateRoomInputDto = {
      room: roomToCreate,
    };

    const output = await useCase.execute(input);

    expect(output.room.id).toEqual(roomToCreate.id);
  });
});
