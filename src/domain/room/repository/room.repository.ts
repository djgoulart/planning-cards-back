import Participant from "../entities/participants";
import Room from "../entities/room";

export interface RoomRepositoryInterface {
  create(data: Room): Promise<Room>;
  joinRoom(participant: Participant, roomId: string): Promise<Room>
}
