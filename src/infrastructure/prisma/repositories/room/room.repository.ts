
import { RoomRepositoryInterface } from "@/domain/room/repository/room.repository";
import Participant from "@/domain/room/entities/participants";
import client from "../../client";
import Room from "@/domain/room/entities/room";

export default class RoomRepository implements RoomRepositoryInterface {
  async create(data: Room): Promise<Room> {
    const room = await client.room.create({
      data: {
        name: data.name,
        id: data.id,
      },
    });

    return new Room({
      id: room.id,
      participants: [],
      tasks: [],
      name: room.name,
    });
  }

  async joinRoom(participant: Participant, roomId: string): Promise<Room> {
    const room = await client.room.update({
      where: {
        id: roomId 
      },
      data: {
        users: {
          connect: {
            id: participant.id
          }
        }
      },
      include: {
        users: {}
      }
    })    

    return new Room({
      name: room.name,
      id: room.id,
      participants: room.users.map(user => {
        return new Participant({
          name: user.name,
          id: user.id
        })
      })
    })
  }
}
