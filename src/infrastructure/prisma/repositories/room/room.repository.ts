import { PrismaClient } from "@prisma/client";
import Room from "../../../../domain/room/entities/room";
import { RoomRepositoryInterface } from "src/domain/room/repository/room.repository";

export default class RoomRepository implements RoomRepositoryInterface {
  async create(data: Room): Promise<Room> {
    //TODO: Mudar para o client de infra/prisma/client
    const prisma = new PrismaClient();
    const room = await prisma.room.create({
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
}
