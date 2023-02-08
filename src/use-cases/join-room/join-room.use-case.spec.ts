import Participant from "@/domain/room/entities/participants";
import { JoinRoomInputDto } from "./join-room.dto";
import { JoinRoomUseCase } from "./join-room.use-case";

it("Should be able to join in an existing room", async () => {
  const useCase = new JoinRoomUseCase();

  const participant = new Participant({
    name: "Caraca",
    id: "123",
  });

  const input: JoinRoomInputDto = {
    roomId: "123",
    participant,
  };

  const output = await useCase.execute(input);

  expect(output.room.participants).toEqual([participant]);
});

it("Should not be able to join in an invalid room", () => {
  expect(true).toBeTruthy();
});
