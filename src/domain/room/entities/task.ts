import { randomUUID } from 'crypto'

export type nada = {
  name: string
}

export type TaskProps = {
  name: string
  id?: string
  finalVote?: string
}

export class Task {
  private _name: string
  private _id: string
  private _finalVote?: string

  constructor(props: TaskProps) {
    this._name = props.name
    this._id = props.id ?? randomUUID()
    this._finalVote = props.finalVote
  }
}
