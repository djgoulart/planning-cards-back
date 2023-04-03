import Participant from '../entities/participants'
import Room from '../entities/room'

export interface RoomRepositoryInterface {
  create(data: Room): Promise<void>
  joinRoom(participant: Participant, roomId: string): Promise<void>
  findById(id: string): Promise<Room | null>
  leaveRoom(participantId: string, roomId: string): Promise<void>
}
