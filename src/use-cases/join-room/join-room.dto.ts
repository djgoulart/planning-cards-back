import Participant from '@/domain/room/entities/participants'
import Room from '@/domain/room/entities/room'

export interface JoinRoomInputDto {
  roomId: string
  participant: Participant
}

export interface JoinRoomOutputDto {
  room: Room
}
