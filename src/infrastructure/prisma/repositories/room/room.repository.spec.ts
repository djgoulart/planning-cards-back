import Room from "@/domain/room/entities/room";
import ParticipantFactory from "@/domain/room/factory/participant.factory";
import RoomFactory from "@/domain/room/factory/room.factory";
import { prismaMock } from "../../singleton";
import RoomRepository from "./room.repository";


it("Should be able to create an room", async () => {
  const room = RoomFactory.createEmptyRoom("Empty");

  const repository = new RoomRepository();

  const roomCreated = await repository.create(room);

  await expect({
    name: roomCreated.name,
    id: roomCreated.id,
  }).toStrictEqual({
    id: room.id,
    name: room.name,
  });
});

it("should be able to join in a room", async () => {
  const participant = ParticipantFactory.create("Participant")
  const room = new Room({
    participants: [participant],
    name: "My Room"
  })

  room.joinRoom(participant)
      const roomRepository = new RoomRepository()
  
  await roomRepository.create(room)
  
  jest.spyOn(roomRepository, "joinRoom").mockResolvedValue(room)

  const roomJoined = await roomRepository.joinRoom(participant, room.id)

  expect(roomJoined.participants).toEqual(room.participants)
})