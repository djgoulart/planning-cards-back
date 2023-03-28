import Participant from "@/domain/room/entities/participants";
import RoomFactory from "@/domain/room/factory/room.factory";
import { prismaMock } from "../../infrastructure/prisma/singleton";
import roomRepositoryMock, { roomWithParticipant } from "../../tests/mocks/repository/room-repository.mock";
import { JoinRoomInputDto } from "./join-room.dto";
import { JoinRoomUseCase } from "./join-room.use-case";

it("Should be able to join in an existing room", async () => {
  const participant = new Participant({
    name: "Participant",
    id: "123",
  });

  const room = RoomFactory.createEmptyRoom("My room")
  room.joinRoom(participant)

  prismaMock.room.update.mockResolvedValue(room)

  const useCase = new JoinRoomUseCase(roomRepositoryMock);

  const input: JoinRoomInputDto = {
    roomId: "123",
    participant,
  };

  const output = await useCase.execute(input);

  expect(output.room.participants).toEqual(roomWithParticipant.participants);
});
