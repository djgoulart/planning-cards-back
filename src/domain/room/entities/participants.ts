import BaseUser from '../@shared/base-user'

export type ParticipantProps = {
  name: string
  id?: string
}

export default class Participant extends BaseUser {}
