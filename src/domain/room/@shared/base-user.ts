import { randomUUID } from 'crypto'
import { Role } from './roles'

export type BaseUserProps = {
  name: string
  role?: Role
  id?: string
}

export default class BaseUser {
  private _id: string
  private _name: string
  private _role: Role

  constructor(props: BaseUserProps) {
    this._id = props.id ?? randomUUID()
    this._name = props.name
    this._role = props.role ?? new Role('SPECTATOR')
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get role(): Role {
    return this._role
  }
}
