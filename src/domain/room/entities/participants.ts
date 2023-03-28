import { randomUUID } from "crypto";

export type ParticipantProps = {
  name: string;
  id?: string;
};

export default class Participant {
  private _id: string;
  private _name: string;

  constructor(props: ParticipantProps) {
    this._id = props.id ?? randomUUID();
    this._name = props.name;
  }

  get id(): string {
    return this._id
  }
}
