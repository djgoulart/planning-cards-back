import RoomFactory from "@/domain/room/factory/room.factory";
import { Context, createMockContext, MockContext } from "../../context";
import RoomRepository from "./room.repository";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it("Should be able to create an room", async () => {
  const room = RoomFactory.createEmptyRoom("Empty");

  mockCtx.prisma.room.create.mockResolvedValue(room);

  const repository = new RoomRepository();

  const roomCreated = await repository.create(room);

  await expect({
    name: roomCreated.name,
    id: roomCreated.id,
  }).toStrictEqual({
    id: room.id,
    name: room.name,
  });
});
