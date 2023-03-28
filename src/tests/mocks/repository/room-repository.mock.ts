import Participant from "@/domain/room/entities/participants"
import Room from "@/domain/room/entities/room"
import RoomFactory from "@/domain/room/factory/room.factory";
import { RoomRepositoryInterface } from "@/domain/room/repository/room.repository"

export const validRoom = RoomFactory.createEmptyRoom("Empty room");

const participant = new Participant({
  name: "Participant",
  id: "1"
})

export const roomWithParticipant = new Room({
  participants: [participant],
  id: "1",
  name: "Room"
})

const roomRepositoryMock: RoomRepositoryInterface = {
  create() {
    return Promise.resolve(validRoom)
  },
  joinRoom(participant, roomId) {
    return Promise.resolve(roomWithParticipant)
  },
}

export default roomRepositoryMock