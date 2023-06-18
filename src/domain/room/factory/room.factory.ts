import Room from '../entities/room'

export default class RoomFactory {
  static createEmptyRoom(name: string): Room {
    return new Room({
      name,
    })
  }
}
