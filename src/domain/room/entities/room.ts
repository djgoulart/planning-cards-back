import { randomUUID } from "crypto";
import Participant from "./participants";
import { Task } from "./task";

export interface RoomProps {
  id?: string;
  name: string;
  tasks?: Task[];
  participants?: Participant[];
}

export default class Room {
  private _id: string;
  private _name: string;
  private _tasks?: Task[];
  private _participants?: Participant[];

  constructor(props: RoomProps) {
    this._id = props.id || randomUUID();
    this._name = props.name;
    this._participants = props.participants ?? [];
    this._tasks = props.tasks ?? [];
  }

  get participants(): Participant[] | undefined {
    return this._participants;
  }
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
