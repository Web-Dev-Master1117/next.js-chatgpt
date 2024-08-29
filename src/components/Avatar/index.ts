import Avatar from './Avatar'
import BotAvatar from './BotAvatar'
import UserAvatar from './UserAvatar'

export default Object.assign(Avatar, {
  User: UserAvatar,
  Bot: BotAvatar,
})
