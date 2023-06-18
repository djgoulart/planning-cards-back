import ParticipantFactory from '@/domain/room/factory/participant.factory'
import RoomFactory from '@/domain/room/factory/room.factory'

describe('Kick user use case', () => {
  it('should be able to kick an participant', () => {
    const user = ParticipantFactory.create('participant')

    const room = RoomFactory.createEmptyRoom('room')

    room.joinRoom(user)

    expect(room.participants.length).toEqual(1)

    room.kickUser(user)

    expect(room.participants.length).toEqual(0)
  })
})
