type Roles = 'ADMIN' | 'SPECTATOR' | 'PARTICIPANT' | 'MANAGER'

export class Role {
  name: Roles

  constructor(name: Roles) {
    this.name = name
  }
}

export default Roles
