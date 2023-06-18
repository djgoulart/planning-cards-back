import Room from '../../entities/room'
import BaseUser from '../base-user'
import Roles from '../roles'

export default class RoomPermissions {
  canKickUser(user: BaseUser, room: Room) {
    const kickUserPermissions: Roles[] = ['ADMIN', 'MANAGER']

    if (
      room.participants.some((participant) => {
        return participant.id === user.id
      })
    ) {
      return kickUserPermissions.some((role) => role === user.role.name)
    }

    return false
  }

  canRevealTasks(user: BaseUser, room: Room) {
    const revealPermissions: Roles[] = ['ADMIN']

    if (
      room.participants.some((participant) => {
        return participant.id === user.id
      })
    ) {
      return revealPermissions.some((role) => role === user.role.name)
    }
    return false
  }
}
