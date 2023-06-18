import BaseUser, { BaseUserProps } from '../@shared/base-user'
import { Role } from '../@shared/roles'

export default class Admin extends BaseUser {
  constructor(props: BaseUserProps) {
    super({
      ...props,
      role: new Role('ADMIN'),
    })
  }
}
