import BaseUser from '@/domain/room/@shared/base-user'
import { UseCaseInterface } from '../@shared/use-case.interface'
import RoomPermissions from '@/domain/room/@shared/permissions/room.permissions'
import Room from '@/domain/room/entities/room'

export default class RevealUseCase implements UseCaseInterface {
  private roomPermissions

  constructor(roomPermissions: RoomPermissions) {
    this.roomPermissions = roomPermissions
  }

  execute(user: BaseUser, room: Room) {
    if (this.roomPermissions.canRevealTasks(user, room)) {
      return 'a'
    }
    return 'b'
  }
}
