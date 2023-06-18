import BaseUser, { BaseUserProps } from '../@shared/base-user'
import { Role } from '../@shared/roles'

export default class Manager extends BaseUser {
  constructor(props: BaseUserProps) {
    super({
      ...props,
      role: new Role('MANAGER'),
    })
  }
}
