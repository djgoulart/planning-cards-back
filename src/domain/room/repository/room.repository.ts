import Room from "../entities/room";

export interface RoomRepositoryInterface {
  create(data: Room): Promise<Room>;
}
